"use client";
import React from "react";
import { Workspace as WorkspaceType } from "@prisma/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getWorkspaces } from "@/lib/queryFns/getWorkspaces";
import axios from "axios";
import { Workspace } from "./Workspace";

export const WorkspaceFeed = ({
  // initialWorkspaces,
}: {
  // initialWorkspaces: WorkspaceType[];
}) => {
  const queryClient = useQueryClient(); 



  const { data=[] } = useQuery({
    queryKey: ["workspaces"],
    queryFn: async()=>{
      const res = await fetch(`https://watchly-io.vercel.app/api/queryFns/workspaces`);
      const json = await res.json();
      
      return json.data as WorkspaceType[];
    },

    // initialData: initialWorkspaces,
  });

  console.log(data,"client")

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
