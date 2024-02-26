import * as z from "zod";

export const WorkspaceValidator = z.object({
  name: z
    .string()
    .min(3, { message: "Workspace name must be at least 3 character" }),
});

export type WorkspaceRequest = z.infer<typeof WorkspaceValidator>;
