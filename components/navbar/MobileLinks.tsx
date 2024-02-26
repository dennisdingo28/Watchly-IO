"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { OpenModal } from "../modals/OpenModal";
import { UserAvatar } from "../UserAvatar";
import { signOut } from "next-auth/react";

export const MobileLinks = ({
  userImage,
  isLoggedIn,
}: {
  userImage: string;
  isLoggedIn: boolean;
}) => {
  const [showX, setShowX] = useState(false);
  return (
    <DropdownMenu onOpenChange={() => setShowX((prevState) => !prevState)}>
      <DropdownMenuTrigger asChild>
        {!showX ? <Menu className="cursor-pointer" /> : <X />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        {isLoggedIn && (
          <>
            <DropdownMenuLabel className="flex items-center gap-2.5">
              <UserAvatar userImage={userImage} className="w-[35px] h-[35px]" />
              <p className="max-w-[120px] truncate text-md">Alexis Moldovan</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}

        <Link href="/" className="text-sm font-medium">
          <DropdownMenuItem className="cursor-pointer">About</DropdownMenuItem>
        </Link>
        <Link href="/" className="text-sm font-medium">
          <DropdownMenuItem className="cursor-pointer">
            Services
          </DropdownMenuItem>
        </Link>
        <Link href="/" className="text-sm font-medium">
          <DropdownMenuItem className="cursor-pointer">
            Contact
          </DropdownMenuItem>
        </Link>
        <Link href="/" className="text-sm font-medium">
          <DropdownMenuItem className="cursor-pointer">
            Pricing
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />
        {!isLoggedIn && (
          <OpenModal type="login">
            <DropdownMenuItem className="cursor-pointer">
              <span className="text-sm font-medium">Login</span>
            </DropdownMenuItem>
          </OpenModal>
        )}

        {!isLoggedIn && (
          <OpenModal type="register">
            <DropdownMenuItem className="cursor-pointer">
              <span className="text-sm font-medium">Register</span>
            </DropdownMenuItem>
          </OpenModal>
        )}

        {isLoggedIn && (
          <DropdownMenuItem
            onClick={() => signOut()}
            className="cursor-pointer"
          >
            <span className="text-sm font-medium text-rose-500">Logout</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
