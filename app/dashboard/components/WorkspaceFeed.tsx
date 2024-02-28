"use client";
import React from "react";
import { Workspace as WorkspaceType } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { Workspace } from "./Workspace";
import { getWorkspaces } from "@/lib/queryFns/getWorkspaces";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {Array(
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
      )}
    </div>
  );
};
