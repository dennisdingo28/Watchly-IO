"use server"

import { currentUser } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

export async function StripeSession(){
    try{
        
        const user = await currentUser();
        if(!user) return {isError: true, message:"You have to be logged in."};

        try{
            console.log("gjss");
            
            const stripeSession = await stripe.checkout.sessions.create({
                success_url:"http://localhost:3000/pricing",
                cancel_url:"http://localhost:3000/pricing",
                payment_method_types:["card"],
                mode:"subscription",
                billing_address_collection:"auto",
                customer_email:user.email!,
                line_items:[
                    {
                        "price":"price_1P1uX3IQvcouQFIYxrSyNCki",
                        quantity:1,
                    },
                ],
               
            });
            console.log(stripeSession.url);
            
            redirect(stripeSession.url!);
        }catch(err){

        }

    }catch(err){
        console.log(err);
    }
}