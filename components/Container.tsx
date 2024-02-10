import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode;
}

export const Container = ({children, className}: ContainerProps) => {
  return (
    <div className={cn("container mx-auto", className)}>
      {children}
    </div>
  )
}