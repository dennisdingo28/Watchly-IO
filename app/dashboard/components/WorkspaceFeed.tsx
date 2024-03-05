"use client";
import React from "react";
import { Workspace as WorkspaceType } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { Workspace } from "./Workspace";
import { getWorkspaces } from "@/lib/queryFns/getWorkspaces";
import { cn } from "@/lib/utils";
import { Folder } from "lucide-react";

export const WorkspaceFeed = ({
  initialWorkspaces,
  userImage,
  userName,
  userEmail,
}: {
  initialWorkspaces: WorkspaceType[];
  userImage: string;
  userName: string;
  userEmail: string;
}) => {
  const { data } = useQuery({
    queryKey: ["workspaces"],
    queryFn: getWorkspaces,
    initialData: initialWorkspaces,
  });

  return (
    <div
      className={cn(
        "relative",
        data.length > 0 &&
          " relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5",
        data.length == 0 && "flex items-center justify-center h-full"
      )}
    >
   
      {data.length > 0 ? (
        Array(
          data?.map((workspace) => (
            <Workspace
              userImage={userImage}
              userName={userName}
              userEmail={userEmail}
              key={workspace.id}
              name={workspace.name}
              id={workspace.id}
              createdAt={workspace.createdAt}
            />
          ))
        )
      ) : (
        <div className="text-darkGray">
          <Folder className="mx-auto" />
          <p className="uppercase">No workspaces yet.</p>
        </div>
      )}
    </div>
  );
};
