"use client"

import axios, { AxiosError } from "axios";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { WorkspaceRequest, WorkspaceValidator } from "@/validators/workspace";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { useClickOutside } from "@mantine/hooks";
import { revalidatePathname } from "@/lib/revalidatePathname";
import { WorkspaceWithUsers } from "@/types";
import { toast } from "sonner";


export const WorkspaceName = ({workspace}:{workspace: WorkspaceWithUsers}) =>{
  
   
    const [isEditing, setIsEditing] = useState(false);
    const [showErrors, setShowErrors] = useState(false);
    
    const {handleSubmit, register, formState:{errors}, getValues, setValue} = useForm<WorkspaceRequest>({
        resolver: zodResolver(WorkspaceValidator),
        defaultValues:{
            name: workspace.name,
        },
    });
    const editRef =  useClickOutside(()=>{
        if(getValues("name")!==workspace.name){
            updateWorkspaceName(getValues("name"));
        }
        else setIsEditing(false);
    });

    const {mutate: updateWorkspaceName, isPending} = useMutation({
        mutationFn: async(newName: string)=>{
            const res = await axios.patch(`/api/workspace/${workspace.id}`, {name: newName});

            return res.data;
        },
        onSettled:()=>{
            setIsEditing(false);
            revalidatePathname(`/dashboard/${workspace.id}`);
        },
        onError:(error)=>{
            setValue("name", workspace.name);
            if(error instanceof AxiosError)
            toast.error(error.response?.data || "Something went wrong. Please try again later.")
            else toast.error("Something went wrong. Please try again later.");
        }
    });

    useEffect(()=>{
        console.log(errors);
        
        if(errors && Object.keys(errors).length!==0){
            setShowErrors(true);
            console.log(errors);
            
        }

        setTimeout(()=>{
            setShowErrors(false);
        }, 2000);
    },[errors]);


    
    if(isEditing){
        
        return (
            <form ref={editRef} onSubmit={handleSubmit((data)=>updateWorkspaceName(data.name))}>
                <Input disabled={isPending} autoFocus {...register("name")} placeholder={showErrors ? errors.name?.message ? "Too short":"":""} className={cn(showErrors ? "focus:outline focus:outline-red-500":null)}/>
            </form>
        )
    }

    return (
        <div onClick={()=>setIsEditing(true)} className="font-bold">
            {workspace.name}
        </div>
    )
}