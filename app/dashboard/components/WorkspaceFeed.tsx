"use client";
import React from "react";
import { Workspace as WorkspaceType } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { getWorkspaces } from "@/lib/queryFns/getWorkspaces";
import axios from "axios";
import { Workspace } from "./Workspace";

export const WorkspaceFeed = ({
  // initialWorkspaces,
}: {
  // initialWorkspaces: WorkspaceType[];
}) => {
  const { data=[] } = useQuery({
    queryKey: ["workspaces"],
    queryFn: async()=>{
      const res = await axios.get(`/api/queryFns/workspaces`);

      return res.data as WorkspaceType[];
    },
    // initialData: initialWorkspaces,
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {Array(data?.map((workspace) => (
        <Workspace
          key={workspace.id}
          name={workspace.name}
          createdAt={workspace.createdAt}
        />
      )))}
    </div>
  );
};
