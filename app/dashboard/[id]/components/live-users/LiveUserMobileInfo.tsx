import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { formatJoinedDate } from "@/lib/formatDate";
import { cn } from "@/lib/utils";
import { WorkspaceUser, WorkspaceUserStatus } from "@prisma/client";
import Image from "next/image";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { GoDotFill } from "react-icons/go";
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
          <DrawerDescription className="flex items-center justify-between">
            {workspaceUser.id}
            <div className="flex items-center gap-2.5 text-xs">
              <p className="uppercase">
                {workspaceUser.status === WorkspaceUserStatus.ONLINE
                  ? "online"
                  : "offline"}
              </p>
              <GoDotFill
                className={cn(
                  workspaceUser.status === WorkspaceUserStatus.OFFLINE
                    ? "text-rose-500"
                    : "text-emerald-500"
                )}
              />
            </div>
          </DrawerDescription>
          <div className="mt-10 flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <p>On:</p>
              <p className="text-xs">/pricing</p>
            </div>
            <div className="flex items-center gap-1">
              <ReactCountryFlag
                className="text-2xl"
                svg
                countryCode={workspaceUser.countryCode}
              />{" "}
              <span>{workspaceUser.country}</span>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src="/windows.svg"
                width={25}
                height={25}
                alt="browser-icon"
              />
              <span>{workspaceUser.platform}</span>
            </div>
          </div>

          <div className="flex items-center text-sm">
            <div className="flex items-center gap-1">
              <p>Connected:</p>
              <p className="text-xs">
                {formatJoinedDate(workspaceUser.joinedAt)}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm">Disconnected:</p>
              <p className="text-xs">now</p>
            </div>
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};
