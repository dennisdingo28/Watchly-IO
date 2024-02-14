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
import { OpenModal } from "../modals/OpenModal";

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
          <OpenModal type="login">
            <span className="text-sm font-medium">Login</span>
          </OpenModal>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <OpenModal type="register">
            <span className="text-sm font-medium">Register</span>
          </OpenModal>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="text-sm font-medium text-rose-500">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
