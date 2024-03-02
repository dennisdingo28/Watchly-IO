import * as z from "zod";

export const EditRecordingSchema = z.object({
  name: z.string().min(6, {
    message: "Name must be at least 6 characters long",
  }),
});

export type EditRecordingSchemaType = z.infer<typeof EditRecordingSchema>;
