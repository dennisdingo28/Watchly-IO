import { Circle } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface LinkProps {
  where: string;
  label: string;
}

export const NavLink: FC<LinkProps> = ({ label, where }) => {
  return (
    <Link
      href={where}
      className="flex items-center gap-2 border-b-2 border-white hover:border-purple transition-colors group"
    >
      <Circle className="h-2 w-2 group-hover:text-purple transition-colors" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};