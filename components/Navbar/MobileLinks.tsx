"use client";
import { useState } from "react";
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

export const MobileLinks = () => {
  const [showX, setShowX] = useState(false);
  return (
    <DropdownMenu onOpenChange={() => setShowX((prevState) => !prevState)}>
      <DropdownMenuTrigger asChild>
        {!showX ? <Menu className="cursor-pointer" /> : <X />}
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
        <OpenModal type="login">
          <DropdownMenuItem>
            <span className="text-sm font-medium">Login</span>
          </DropdownMenuItem>
        </OpenModal>

        <OpenModal type="register">
          <DropdownMenuItem>
            <span className="text-sm font-medium">Register</span>
          </DropdownMenuItem>
        </OpenModal>

        <DropdownMenuItem>
          <span className="text-sm font-medium text-rose-500">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
