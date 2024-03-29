import { Circle } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface FotLinkProps {
  label: string;
  where: string;
}

export const FotLink: FC<FotLinkProps> = ({ label, where }) => {
  return (
    <Link href={where} className="flex items-center gap-2 group text-white">
      <span className="text-sm font-medium group-hover:text-darkGray">
        {label}
      </span>
    </Link>
  );
};
