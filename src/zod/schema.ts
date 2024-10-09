import { z } from "zod";

export const CreateOrUpdateLinkSchema = z.object({
  description: z.string().optional(),
  name: z.string(),
  link: z.string(),
});

export type CreateOrUpdateLink = z.infer<typeof CreateOrUpdateLinkSchema>;
