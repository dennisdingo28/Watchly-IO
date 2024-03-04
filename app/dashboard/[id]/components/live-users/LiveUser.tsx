"use client";

import { formatJoinedDate } from "@/lib/formatDate";
import { cn } from "@/lib/utils";
import { WorkspaceUser, WorkspaceUserStatus } from "@prisma/client";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";

export const LiveUser = ({
  workspaceUser,
}: {
  workspaceUser: WorkspaceUser;
}) => {
  return (
    <div className="flex pr-1 gap-3 items-center justify-between border-2 border-purple rounded-md">
      <div className="p-1 bg-purple rounded-tl-sm rounded-bl-sm">
        <p className="text-white font-medium">{workspaceUser.id}</p>
      </div>
        <p className="text-purple">
          {formatJoinedDate(workspaceUser.joinedAt)}
        </p>
        <p className="text-purple">
          {formatJoinedDate(workspaceUser.joinedAt)}
        </p>
        <div>
          <ReactCountryFlag className="text-2xl" svg countryCode={workspaceUser.countryCode} />
        </div>
        <div className="flex items-center gap-2">
            <Image src="/windows.svg" width={25} height={25} alt="browser-icon" />
            <span className="text-sm">
                {workspaceUser.platform}
            </span>
        </div>
      <div className="flex items-center gap-1">
        <div
          className={cn(
            "w-[10px] h-[10px] rounded-full animate-pulse",
            WorkspaceUserStatus.OFFLINE===workspaceUser.status ? "bg-red-500" : "bg-green-500"
          )}
        />
        <span className="text-sm font-medium">
          {workspaceUser.status.toLocaleLowerCase()}
        </span>
      </div>
    </div>
  );
};
