import * as z from "zod";

export const EarlyUserValidator = z.object({
    email: z.string({required_error: "Email is required"}).email({message: "Invalid email"}),
});

export type EarlyUserRequest = z.infer<typeof EarlyUserValidator>;