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

export const CreateWorkspaceModal = () => {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type == "createWorkspace";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-bl from-[#d9d7fe] to-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create a new Workspace</DialogTitle>
        </DialogHeader>
        <CreateWorkspaceForm/>
      </DialogContent>
    </Dialog>
  );
};
