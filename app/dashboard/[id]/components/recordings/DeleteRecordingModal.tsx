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
import React from "react";

export const DeleteRecordingModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const isModalOpen = isOpen && type == "deleteRecording";

  return (
    <AlertDialog open={isModalOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-darkGray">
            This action cannot be undone. This will permanently delete your{" "}
            <span className="underline underline-offset-4 decoration-purple">
              {/* {data.workspaceName} */}
            </span>{" "}
            and remove your workspace data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            // disabled={isPending}
            // onClick={() => deleteWorkspace({ workspaceId: data.workspaceId! })}
            className="bg-rose-500 hover:bg-[#c1314a]"
          >
            {/* {isPending && <Loader2 className="h-4 w-4 animate-spin mr-2" />} */}
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
