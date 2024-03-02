"use client";
import { UserAvatar } from "@/components/UserAvatar";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal";
import { Workspace } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";

export const DeleteWorkspaceModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const isModalOpen = isOpen && type == "deleteWorkspace";

  const queryClient = useQueryClient();
  const { mutate: deleteWorkspace, isPending } = useMutation({
    mutationFn: async ({ workspaceId }: { workspaceId: string }) => {
      const { data } = await axios.delete(`/api/workspace/${workspaceId}`);
      return data;
    },
    onSuccess: (data: Workspace) => {
      toast.success(`Workspace '${data.name}' was deleted`);
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
    <AlertDialog open={isModalOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-darkGray">
            This action cannot be undone. This will permanently delete your{" "}
            <span className="underline underline-offset-4 decoration-purple">
              {data.workspaceName}
            </span>{" "}
            and remove your workspace data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            disabled={isPending}
            onClick={() => deleteWorkspace({ workspaceId: data.workspaceId! })}
            className="bg-rose-500 hover:bg-[#c1314a]"
          >
            {isPending && (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            )}
            Delete
          </Button>
        </AlertDialogFooter>
        <p className="text-darkGray text-sm">Signed as:</p>
        <div className="flex gap-2.5">
          <UserAvatar userImage={data.user?.image!} />
          <div className="">
            <p className="truncate text-md">{data.user?.name}</p>
            <p className="text-xs text-darkGray">{data.user?.email}</p>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
