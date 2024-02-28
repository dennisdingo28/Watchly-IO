"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal";
import React from "react";
import { CreateWorkspaceForm } from "./CreateWorkspaceForm";
import { UserAvatar } from "@/components/UserAvatar";

export const CreateWorkspaceModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const isModalOpen = isOpen && type == "createWorkspace";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-bl from-[#d9d7fe] to-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create a new Workspace</DialogTitle>
        </DialogHeader>
        <CreateWorkspaceForm />
        <p className="text-darkGray text-sm">Signed as:</p>
        <div className="flex gap-2.5">
          <UserAvatar userImage={data.user?.image!} />
          <div className="">
            <p className="truncate text-md">{data.user?.name}</p>
            <p className="text-xs text-darkGray">{data.user?.email}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
