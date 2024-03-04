"use client";

import axios, { AxiosError } from "axios";
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
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { toast } from "sonner";

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
  const [edited, setEdited] = useState(false);

  const form = useForm<WorkspaceRequest>({
    resolver: zodResolver(WorkspaceValidator),
    defaultValues: {
      name: data.id !== workspace.id ? workspace.name : data.name,
    },
  });
  const {
    getValues,
    formState: { errors },
  } = form;

  const queryClient = useQueryClient();
  const { mutate: updateWorkspaceName, isPending } = useMutation({
    mutationFn: async (newName: string) => {
      const res = await axios.patch(`/api/workspace/${data?.id}`, {
        name: newName,
      });
      setEdited(true);
      return res.data;
    },
    onSettled: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({ queryKey: ["workspaceName"] });
    },
    onError: (error) => {
      if (error instanceof AxiosError)
        toast.error(
          error.response?.data ||
            "Something went wrong. Please try again later."
        );
      else toast.error("Something went wrong. Please try again later.");
    },
  });

  const editRef = useClickOutside(() => {
    if (getValues("name") !== data?.name) {
      updateWorkspaceName(getValues("name"));
    } else setIsEditing(false);
  });
  const onSubmit = (values: WorkspaceRequest) => {
    updateWorkspaceName(values.name);
  };

  useEffect(() => {
    if (errors && Object.keys(errors).length !== 0) {
      setShowErrors(true);
    }

    setTimeout(() => {
      setShowErrors(false);
    }, 2000);
  }, [errors]);

  if (isEditing) {
    return (
      <Form {...form}>
        <form
          ref={editRef}
          className="mb-2.5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder={showErrors ? errors.name?.message : ""}
                    className={cn(showErrors ? "bg-red-500" : null)}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    );
  }

  return (
    <div onClick={() => setIsEditing(true)} className="font-bold">
      {data.name}
    </div>
  );
};
