"use client";

import { formatJoinedDate } from "@/lib/formatDate";
import { cn } from "@/lib/utils";
import { WorkspaceUser, WorkspaceUserStatus } from "@prisma/client";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";
import { HiStatusOnline } from "react-icons/hi";

export const LiveUser = ({
  workspaceUser,
}: {
  workspaceUser: WorkspaceUser;
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:pr-1 gap-3 lg:gap-10 lg:items-center justify-between border-2 border-purple rounded-md">
      <div className="p-1 w-full h-full bg-purple rounded-t-sm lg:rounded-tl-sm lg:rounded-bl-sm lg:rounded-br-sm">
        <p className="text-white max-w-full font-medium text-center text-sm whitespace-nowrap truncate">{workspaceUser.id}</p>
      </div>
        <div className="w-full flex items-center justify-evenly lg:justify-between gap-3">
          <p className="text-purple text-center whitespace-nowrap truncate">
            {formatJoinedDate(workspaceUser.joinedAt)}
          </p>
          <p className="text-purple text-center whitespace-nowrap truncate">
            {formatJoinedDate(workspaceUser.joinedAt)}
          </p>
        </div>
       
       <div className="w-full flex items-center justify-center lg:justify-center gap-5">
          <div className="text-center">
            <ReactCountryFlag className="text-2xl" svg countryCode={workspaceUser.countryCode} />
          </div>
          <div className="flex items-center justify-center gap-2">
              <Image src="/windows.svg" width={25} height={25} alt="browser-icon" />
              <span className="text-sm">
                  {workspaceUser.platform}
              </span>
          </div>
       </div>
        
      <div className="flex items-center justify-center lg:justify-normal gap-1">
        <HiStatusOnline
          className={cn(
            "text-[20px] animate-pulse",
            WorkspaceUserStatus.OFFLINE===workspaceUser.status ? "text-red-500" : "text-green-500"
          )}
        />
        <span className="text-sm font-medium">
          {workspaceUser.status.toLocaleLowerCase()}
        </span>
      </div>
    </div>
  );
};
