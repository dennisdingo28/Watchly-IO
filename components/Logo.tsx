import { cn } from "@/lib/utils";
import { League_Spartan, Quicksand } from "next/font/google";
import Link from "next/link";
import { HTMLAttributes } from "react";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

interface LogoProps extends HTMLAttributes<HTMLHeadingElement>{};

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href={"/"} className="flex flex-col items-center">
      <h1 className={cn(leagueSpartan.className, "text-[25px] font-bold tracking-tighter", className)}>Watchly IO</h1>
      <p className={cn(quicksand.className, "text-black font-semibold tracking-widest text-[12px] -mt-1")}>web analytics</p>
    </Link>
  );
};