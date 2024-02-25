"use client";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface LinkProps {
  where: string;
  label: string;
}

export const NavLink: FC<LinkProps> = ({ label, where }) => {
  const pathname = usePathname();

  return (
    <Link
      href={where}
      className={cn(
        "flex items-center gap-2 border-b-2 border-white hover:border-purple transition-colors group",
        pathname.includes(where) && "border-b-2 border-purple"
      )}
    >
      <Circle
        className={cn(
          "h-2 w-2 group-hover:text-purple transition-colors",
          pathname.includes(where) && "text-purple"
        )}
      />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};
