"use client"
import { ModalType, useModal } from "@/hooks/use-modal"
import { useEffect } from "react"

export const OpenUrlModal = ({modalType}:{modalType: ModalType}) => {

    const { onOpen } = useModal()
    
    useEffect(()=>{
        onOpen(modalType);
    },[]);
    

    return null;
}