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
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-56 rotate-[30deg] bg-gradient-to-tr from-darkGray to-purple opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
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
