"use server"

import { db } from "@/lib/db";
import { EarlyUserRequest, EarlyUserValidator } from "@/validators/user"

export async function EarlyUser (user: EarlyUserRequest) {
    try{
        //@ts-ignore
        const {success, data} = EarlyUserValidator.safeParse(user);
        
        if(success){
            const alreadyEarlyUser = await db.earlyUser.findUnique({
                where:{
                    email: data.email,
                },
            });

            if(!alreadyEarlyUser)
            {
                const earlyUser = await db.earlyUser.create({
                    data:{
                        email: data.email,
                    },
                });
                return  {...earlyUser, message:"You joined the waiting list and also collected the premium feature. Stay tuned!"};
            }
            
            return {isError: true, message:"Email is already in waiting list"};
        }

        return {isError: true, message:"Email was not provided"};
    }catch(err){
        return {isError: true, message:"Something went wrong. Please try again later."};
    }
}

export async function getUserById(userId: string) {
    try{
        const user = await db.user.findUnique({
            where:{
                id: userId,
            },
        });

        return user;
    }catch(err){
        return null;
    }
}

export async function getUserByEmail(email: string) {
    try{
        const user = await db.user.findUnique({
            where:{
                email,
            },
        });

        return user;
    }catch(err){
        return null;
    }
}