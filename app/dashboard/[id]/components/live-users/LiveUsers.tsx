"use client";

import { WorkspaceWithUsers } from "@/types";
import { LiveUser } from "./LiveUser";
import { useEffect, useState } from "react";
import { WorkspaceUser } from "@prisma/client";
import { useSocket } from "@/hooks/use-socket";
import { ScrollArea } from "@/components/ui/scroll-area";

export const LiveUsers = ({ workspace }: { workspace: WorkspaceWithUsers }) => {
  const { socket } = useSocket((state) => state);
  //to do with react query
  const [workspaceUsers, setWorkspaceUsers] = useState<Array<WorkspaceUser>>(
    workspace.workspaceUsers
  );

  useEffect(() => {
    if (!socket) return;

    socket.on("status", (workspaceUser: WorkspaceUser) => {
      if (workspaceUsers.length === 0) {
        setWorkspaceUsers([workspaceUser]);
      } else {
        setWorkspaceUsers((prev) => {
          return prev.map((wu) => {
            if (wu.id === workspaceUser.id) return workspaceUser;

            return wu;
          });
        });
      }
    });

    socket.on("current-route", (workspaceUser: WorkspaceUser) => {
      
        setWorkspaceUsers((prev) => {
          return prev.map((wu) => {
            if (wu.id === workspaceUser.id) return workspaceUser;

            return wu;
          });
        });
      
    });

    return () => {
      socket.off("status");
    };
  }, [socket]);

  return (
    <>
      {" "}
      {workspaceUsers.length > 0 ? (
        <ScrollArea className="max-h-[500px]">
          <div className="space-y-10 pr-5">
            {workspaceUsers.map((wUser, idx) => (
              <LiveUser key={idx} workspaceUser={wUser} />
            ))}
          </div>
        </ScrollArea>
      ) : (
        <p className="text-lightGray text-xs">
          No user have visited your app, yet
        </p>
      )}
    </>
  );
};
