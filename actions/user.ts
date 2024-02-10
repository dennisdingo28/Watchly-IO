"use server"

import db from "@/lib/db";
import { EarlyUserRequest, EarlyUserValidator } from "@/validators/user"

export async function EarlyUser (user: EarlyUserRequest) {
    try{
        //@ts-ignore
        const {success, data} = EarlyUserValidator.safeParse(user);
        
        if(success){
            const earlyUser = await db.earlyUser.create({
                data:{
                    email: data.email,
                },
            });

            return  {...earlyUser};
        }

        throw new Error("Invalid payload");
        
    }catch(err){
        return {isError: true, message:(err as Error).message};
    }
}