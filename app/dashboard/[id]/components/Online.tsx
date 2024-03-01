"use client"

import { useSocket } from "@/hooks/use-socket";
import { WorkspaceUser } from "@prisma/client"
import { useEffect, useState } from "react"

export const Online = ({allUsers}:{allUsers: WorkspaceUser[]}) =>{
    const { socket } = useSocket((state) => state);

    const [allWorkspaceUsers, setAllWorkspaceUsers] = useState(allUsers);

    useEffect(()=>{
        if(!socket) return;

        socket.on("status",(userStatus)=>{
            setAllWorkspaceUsers(prev=>{
                return prev.map(us=>{
                    if(us.id===userStatus.id){
                        return {...us, status:userStatus.status}
                    }

                    return us;
                })
            })
        });

        return () => {
            socket.off("status");
          };
    },[socket]);
    
    return (
        <div>
            {allWorkspaceUsers.map((user, idx)=>(
                <div key={idx}>
                    {user.id}
                    {user.status}
                </div>
            ))}
        </div>
    )
}