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
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const MobileLinks = ({
  userImage,
  userName,
  userEmail,
  isLoggedIn,
}: {
  userImage: string;
  userName: string;
  userEmail: string;
  isLoggedIn: boolean;
}) => {
  const [showX, setShowX] = useState(false);
  const pathname = usePathname();

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
              <div className="">
                <p className="max-w-[120px] truncate text-md">{userName}</p>
                <p className="text-xs max-w-[135px] truncate text-darkGray">
                  {userEmail}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}

        <Link href="/dasboard" className="text-sm font-medium">
          <DropdownMenuItem
            className={cn(
              "cursor-pointer",
              pathname.includes("/dashboard") && "text-purple focus:text-purple"
            )}
          >
            Dashboard
          </DropdownMenuItem>
        </Link>
        <Link href="/services" className="text-sm font-medium">
          <DropdownMenuItem
            className={cn(
              "cursor-pointer",
              pathname.includes("/services") && "text-purple focus:text-purple"
            )}
          >
            Services
          </DropdownMenuItem>
        </Link>
        <Link href="/contact" className="text-sm font-medium">
          <DropdownMenuItem
            className={cn(
              "cursor-pointer",
              pathname.includes("/contact") && "text-purple focus:text-purple"
            )}
          >
            Contact
          </DropdownMenuItem>
        </Link>
        <Link href="/pricing" className="text-sm font-medium">
          <DropdownMenuItem
            className={cn(
              "cursor-pointer",
              pathname.includes("/pricing") && "text-purple focus:text-purple"
            )}
          >
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
