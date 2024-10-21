import { db } from "@/orm/db";
import { links } from "@/orm/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { userId } = auth();
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const record = await db
    .select()
    .from(links)
    .where(and(eq(links.userId, userId), eq(links.id, Number(params.id))));

  if (record.length > 0) {
    return Response.json({ link: record[0] });
  } else {
    return Response.json({ error: "Not found" }, { status: 404 });
  }
}

export async function POST() {
  // protected api
  // add a link or update if 'id' is present
}
