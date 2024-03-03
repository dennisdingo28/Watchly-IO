"use client";

import axios from "axios";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { WorkspaceRequest, WorkspaceValidator } from "@/validators/workspace";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useClickOutside } from "@mantine/hooks";
import { WorkspaceWithUsers } from "@/types";
import { getWorkspaceName } from "@/lib/queryFns/getWorkspaceName";

export const WorkspaceName = ({
  workspace,
}: {
  workspace: WorkspaceWithUsers;
}) => {
  const { data } = useQuery({
    queryKey: ["workspaceName"],
    queryFn: () => getWorkspaceName(workspace.id),
    initialData: workspace,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm<WorkspaceRequest>({
    resolver: zodResolver(WorkspaceValidator),
    defaultValues: {
      name: data.name,
    },
  });

  const editRef = useClickOutside(() => {
    if (getValues("name") !== data.name) {
      updateWorkspaceName(getValues("name"));
    } else setIsEditing(false);
  });

  const queryClient = useQueryClient();
  const { mutate: updateWorkspaceName, isPending } = useMutation({
    mutationFn: async (newName: string) => {
      const res = await axios.patch(`/api/workspace/${data.id}`, {
        name: newName,
      });

      return res.data;
    },
    onSettled: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({ queryKey: ["workspaceName"] });
    },
  });

  useEffect(() => {
    if (errors && Object.keys(errors).length !== 0) {
      setShowErrors(true);
      console.log(errors);
    }

    setTimeout(() => {
      setShowErrors(false);
    }, 2000);
  }, [errors]);

  if (isEditing) {
    return (
      <form
        ref={editRef}
        onSubmit={handleSubmit((data) => updateWorkspaceName(data.name))}
      >
        <Input
          disabled={isPending}
          {...register("name")}
          placeholder={showErrors ? errors.name?.message : ""}
          className={cn(showErrors ? "bg-red-500" : null)}
        />
      </form>
    );
  }

  return (
    <div onClick={() => setIsEditing(true)} className="font-bold">
      {data.name}
    </div>
  );
};
