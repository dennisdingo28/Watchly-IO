"use client"

import { useSocket } from "@/hooks/use-socket";
import { WorkspaceUser, WorkspaceUserStatus } from "@prisma/client";
import { useEffect, useState } from "react";
import { OverallCard } from "./OverallCard";
import { User2 } from "lucide-react";
import { WorkspaceWithUsers } from "@/types";

export const ActiveUsersCard = ({workspace}: {workspace: WorkspaceWithUsers}) =>{
    const { socket } = useSocket((state) => state);
  //to do with react query
  const [workspaceUsers, setWorkspaceUsers] = useState<Array<WorkspaceUser>>(
    workspace.workspaceUsers
  );

  useEffect(() => {
    if (!socket) return;

    socket.on("status", (workspaceUser: WorkspaceUser) => {
      setWorkspaceUsers(prev=>{
        return prev.map(wu=>{
          if(wu.id===workspaceUser.id) return workspaceUser;

          return wu;
        });
      })
    });

    return () => {
      socket.off("status");
    };
  }, [socket]);

  const onlineWorkspaceUsers = workspaceUsers.filter(wu=>wu.status===WorkspaceUserStatus.ONLINE);

    return (
        <OverallCard
          icon={<User2 className="text-purple w-5 h-5" />}
          amount={onlineWorkspaceUsers.length}
          label="Active Users"
          className="justify-self-start"
        />
    )
}