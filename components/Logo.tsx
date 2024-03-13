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

interface LogoProps extends HTMLAttributes<HTMLHeadingElement> {
  theme: "dark" | "white";
  footer?: boolean;
}

export const Logo = ({ className, theme, footer }: LogoProps) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "flex flex-col items-center",
        footer === true && "mx-auto w-fit"
      )}
    >
      <h1
        className={cn(
          leagueSpartan.className,
          "text-[25px] font-bold tracking-tighter",
          className,
          theme === "white" && "text-lightGray",
          theme === "dark" && "text-black"
        )}
      >
        Watchly IO
      </h1>
      <p
        className={cn(
          quicksand.className,
          "text-black font-semibold tracking-widest text-[12px] -mt-1",
          theme === "white" && "text-lightGray",
          theme === "dark" && "text-black"
        )}
      >
        web analytics
      </p>
    </Link>
  );
};
