"use client";
import { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { OpenModal } from "../modals/OpenModal";

interface MobileLinksProps {}

export const MobileLinks: FC<MobileLinksProps> = ({}) => {
  const [showX, setShowX] = useState(false);
  console.log(showX);
  return (
    <DropdownMenu onOpenChange={() => setShowX((prevState) => !prevState)}>
      <DropdownMenuTrigger asChild>
        {!showX ? (
          <Menu className="cursor-pointer" />
        ) : (
          <X className="cursor-pointera" />
        )}
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
