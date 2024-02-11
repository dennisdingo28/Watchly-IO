import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Menu } from "lucide-react";

interface MobileLinksProps {}

export const MobileLinks: FC<MobileLinksProps> = ({}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu className="cursor-pointer" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="">
        <DropdownMenuItem>
          <span className="text-sm font-medium">About</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="text-sm font-medium">Services</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="text-sm font-medium">Contact</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="text-sm font-medium">Pricing</span>
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
