"use client"

import { useEffect, useState } from "react";
import { ReactQuery } from "./React-Query";

interface ProviderProps{
    children: React.ReactNode;
}

export const Providers = ({children}: ProviderProps) =>{
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(()=>{
        setIsMounted(true);
    },[]);

    if(!isMounted) return null;

    return (
        <>
            <ReactQuery>
                {children}
            </ReactQuery>
        </>
    )
}