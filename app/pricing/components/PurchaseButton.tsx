"use client"

import { StripeSession } from "@/actions/stripe-session"
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

export const PurchaseButton = () => {

    useEffect(() => {
        loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      }, []);

    const onCheckout = async () => {
        await StripeSession();
      };
    return (
        <form action={onCheckout} method="POST">
            <button className="bg-purple border-2 border-purple hover:bg-white hover:text-purple text-white font-semibold w-full max-w-[400px] p-4 rounded-md">
                Get now
            </button>
        </form>
    )
}