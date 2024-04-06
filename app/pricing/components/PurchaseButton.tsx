"use client"

import { StripeSession } from "@/actions/stripe-session"
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

export const PurchaseButton = ({priceId}: {priceId: string}) => {

    useEffect(() => {
        loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      }, []);

    const onCheckout = async (priceId: string) => {
        const data = await StripeSession(priceId);
        if(data?.url)
            window.location.href=data.url;
      };
    return (
        <form action={()=>onCheckout(priceId)} method="POST">
            <button className="bg-purple border-2 border-purple hover:bg-white hover:text-purple text-white font-semibold w-full max-w-[400px] p-4 rounded-md">
                Get now
            </button>
        </form>
    )
}