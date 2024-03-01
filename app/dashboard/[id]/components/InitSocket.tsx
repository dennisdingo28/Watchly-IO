"use client"

import { useSocket } from "@/hooks/use-socket";
import { useEffect } from "react";
import { io } from "socket.io-client";

export const InitSocket = ({roomId}: {roomId: string}) =>{
    const {socket, setSocket} = useSocket(state=>state);
    
    useEffect(()=>{

        if(!socket){
            const newSocket = io("http://localhost:3002",{query:{roomId}});
            setSocket(newSocket);
        }
        
    },[]);
    
    return null;
}