"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { WorkspaceRequest, WorkspaceValidator } from "@/validators/workspace";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Workspace } from "@prisma/client";
import { useModal } from "@/hooks/use-modal";

export const CreateWorkspaceForm = () => {
  const form = useForm<WorkspaceRequest>({
    resolver: zodResolver(WorkspaceValidator),
    defaultValues: {
      name: "",
    },
  });

  const queryClient = useQueryClient();
  const { onClose } = useModal();
  const { mutate: createWorkspace, isPending } = useMutation({
    mutationFn: async ({ name }: WorkspaceRequest) => {
      const payload = {
        name,
      };

      const { data } = await axios.post("/api/workspace", payload);
      return data;
    },
    onSuccess: (data: Workspace, name) => {
      toast.success(`Workspace '${data.name}' was created`);
      onClose();
    },
    onError: (err, name, context) => {
      toast.error(err.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() =>
          createWorkspace({ name: form.getValues("name") })
        )}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="workspace-1"
                  {...field}
                  className="placeholder:text-darkGray"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end mt-10">
          <Button disabled={isPending} type="submit">
            {isPending && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
            Create
          </Button>
        </div>
      </form>
    </Form>
  );
};
