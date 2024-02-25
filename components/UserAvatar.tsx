import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const UserAvatar = ({ userImage,className }: { userImage: string, className?:string }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={userImage}/>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
