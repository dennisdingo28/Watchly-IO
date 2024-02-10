"use client"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets:["latin"], weight:["100", "300", "400", "500", "700", "900"]});


export const WaitingForm = () =>{
    return (
        <form action="">
            <Input autoFocus type="email" className={cn(roboto.className, "border-none tracking-wider text-[1.2em] text-center outline-none")} placeholder="@email"/>
        </form>
    )
}