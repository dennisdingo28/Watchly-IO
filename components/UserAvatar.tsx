"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { signOut } from "next-auth/react";

export const UserAvatar = ({
  userImage,
  className,
  showDropDownMenu,
}: {
  userImage: string;
  className?: string;
  showDropDownMenu?: boolean;
}) => {
  return (
    <Avatar className={className}>
      {showDropDownMenu ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <AvatarImage src={userImage} alt="user-image" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => signOut()}
              className="cursor-pointer"
            >
              <span className="text-sm font-medium text-rose-500">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <AvatarImage src={userImage} />
      )}

      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
