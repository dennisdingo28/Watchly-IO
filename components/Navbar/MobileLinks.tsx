import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

interface MobileLinksProps {}

export const MobileLinks: FC<MobileLinksProps> = ({}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu className="cursor-pointer" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="">
        <DropdownMenuItem>
          <Link href="/" className="text-sm font-medium">
            About
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/" className="text-sm font-medium">
            Services
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/" className="text-sm font-medium">
            Contact
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/" className="text-sm font-medium">
            Pricing
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <span className="text-sm font-medium">Login</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="text-sm font-medium text-rose-500">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
