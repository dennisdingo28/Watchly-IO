"use server"

import { revalidatePath } from "next/cache"

export async function revalidatePathname(path: string){
    revalidatePath(path);
}