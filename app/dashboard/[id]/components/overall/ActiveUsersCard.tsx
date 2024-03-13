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
      if (workspaceUsers.length === 0) {

        if(workspaceUser.status===WorkspaceUserStatus.ONLINE) setWorkspaceUsers([workspaceUser]);

      } else {
        setWorkspaceUsers((prev) => {
            const alreadyExists = prev.find(wu=>wu.id===workspaceUser.id);

            if(alreadyExists){
                if(workspaceUser.status===WorkspaceUserStatus.OFFLINE) return prev.filter(wu=>wu.id!==workspaceUser.id);
            }else {
                return [...prev, workspaceUser];
            }

            return prev;
        });
      }
    });

    return () => {
      socket.off("status");
    };
  }, [socket]);
    return (
        <OverallCard
          icon={<User2 className="text-purple w-5 h-5" />}
          amount={workspaceUsers.length}
          label="Active Users"
          className="justify-self-start"
        />
    )
}