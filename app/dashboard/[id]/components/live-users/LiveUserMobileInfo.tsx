import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { WorkspaceUser } from "@prisma/client";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

export const LiveUserMobileInfo = ({
  workspaceUser,
}: {
  workspaceUser: WorkspaceUser;
}) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <HiDotsHorizontal className="ml-2.5 text-lightGray text-xl cursor-pointer xl:hidden" />
      </DrawerTrigger>
      <DrawerContent className="bg-gradient-to-b from-[#d9d7fe] to-white ">
        <DrawerHeader className="text-left">
          <DrawerTitle>User info</DrawerTitle>
          <DrawerDescription>{workspaceUser.id}</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};
