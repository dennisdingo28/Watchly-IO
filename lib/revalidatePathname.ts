"use server"
import { revalidatePath } from "next/cache"

export const revalidatePathname = async (path: string) =>{
    revalidatePath(path);
}