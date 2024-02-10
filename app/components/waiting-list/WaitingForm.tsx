"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import { SatelliteDishIcon } from "lucide-react";

export const WaitingForm = () =>{
    return (
        <form className="flex items-center justify-center gap-2" action="">
            <Input autoFocus type="email" className={cn("max-w-[400px] border-2 border-purple tracking-wider text-[1em] text-center outline-none")} placeholder="@email"/>
            <Button><SatelliteDishIcon className="animate-pulse"/></Button>
        </form>
    )
}