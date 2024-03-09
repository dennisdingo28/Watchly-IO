"use client"

import { WorkspaceWithUsers } from "@/types"
import { LiveUser } from "./LiveUser"
import { useEffect, useState } from "react"
import { WorkspaceUser } from "@prisma/client"
import { useSocket } from "@/hooks/use-socket"

export const LiveUsers = ({workspace}: {workspace: WorkspaceWithUsers}) =>{
    const {socket} = useSocket(state=>state);
    //to do with react query
    const [workspaceUsers, setWorkspaceUsers] = useState<Array<WorkspaceUser>>(workspace.workspaceUsers);

    useEffect(()=>{
        if(!socket) return;

        socket.on("status", (workspaceUser: WorkspaceUser)=>{
            if(workspaceUsers.length===0){
                setWorkspaceUsers([workspaceUser]);
            }else{
                setWorkspaceUsers(prev=>{
                    return prev.map(wu=>{
                        if(wu.id===workspaceUser.id) return workspaceUser;
                        
                        return wu;
                    });
                });
            }
        });


        return ()=>{
            socket.off("status");
        }
    }, [socket]);

    return (
        <div>
            <h3 className="text-purple font-bold text-2xl text-center mb-2.5">
                Live users
            </h3>
            <div className="space-y-3">
                {workspaceUsers.map((wUser, idx)=>(
                    <LiveUser key={idx} workspaceUser={wUser}/>
                ))}
            </div>
        </div>
    )
}