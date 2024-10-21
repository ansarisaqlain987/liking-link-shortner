import { CreateOrUpdateLink } from "@/zod/schema";
import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/orm/db";
import { links } from "@/orm/schema";
import { and, eq } from "drizzle-orm";
import { generateKey } from "@/utils/data.util";

export async function GET() {
  // protected api
  // return list of links for the user
  const { userId } = auth();
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const records = await db.select().from(links).where(eq(links.userId, userId));
  return Response.json({ links: records });
}

export async function POST(request: NextRequest) {
  const { userId } = auth();
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body: CreateOrUpdateLink = await request.json();
  const existingRecord = await db
    .select()
    .from(links)
    .where(and(eq(links.userId, userId), eq(links.link, body.link.trim())));

  if (existingRecord.length > 0) {
    const { id } = existingRecord[0];
    await db
      .update(links)
      .set({
        name: body.name.trim(),
        description: body.description?.trim() ?? "",
      })
      .where(eq(links.id, id));
    return Response.json({ key: existingRecord[0].key });
  } else {
    const key = generateKey();
    await db
      .insert(links)
      .values({
        key,
        name: body.name.trim(),
        description: body.description?.trim() ?? "",
        link: body.link.trim(),
        userId,
      })
      .returning({ key: links.key });
    return Response.json({ key });
  }
}
