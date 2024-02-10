import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface InfoTextProps extends HTMLAttributes<HTMLParagraphElement>{
    children: React.ReactNode
    asParagraph?: boolean;
}

export const InfoText = ({children, asParagraph, className}: InfoTextProps) =>{
    
    if(asParagraph) return (
        <p className={cn("text-purple", className)}>{children}</p>
    )

    return (
        <span className={cn("text-purple", className)}>{children}</span>
    )
}