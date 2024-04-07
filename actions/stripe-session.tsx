"use server";

import { currentUser } from "@/lib/auth";
import { stripe } from "@/lib/stripe";

export async function StripeSession(priceId: string) {
  try {
    const user = await currentUser();
    if (!user) return { isError: true, message: "You have to be logged in." };

    const targetPrice = await stripe.prices.retrieve(priceId);

    if (!targetPrice) throw new Error("Invalid priceId");

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/pricing",
      cancel_url: "http://localhost:3000/pricing",
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user.email!,
      line_items: [
        {
          price: targetPrice.id,
          quantity: 1,
        },
      ],
    });
      return {url: stripeSession.url};
    } catch (err) {
    console.log(err);
  }
}
