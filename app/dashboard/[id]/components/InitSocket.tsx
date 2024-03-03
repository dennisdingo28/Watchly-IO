"use client"

import { useSocket } from "@/hooks/use-socket";
import { useEffect } from "react";
import { io } from "socket.io-client";

export const InitSocket = ({roomId}: {roomId: string}) =>{
    const {socket, setSocket} = useSocket(state=>state);
    
    useEffect(()=>{
        setSocket(null);
    }, [roomId]);

    useEffect(()=>{

        if(!socket){
            const newSocket = io("http://localhost:3002/dashboard",{query:{roomId}});
            setSocket(newSocket);
        }
        
    },[socket]);
    
    return null;
}