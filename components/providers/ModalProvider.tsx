"use client";

import { CreateWorkspaceModal } from "@/app/dashboard/components/modals/createWorkspaceModal/CreateWorkspaceModal";
import { LoginModal } from "../modals/loginModal/LoginModal";
import { RegisterModal } from "../modals/registerModal/RegisterModal";
import { DeleteWorkspaceModal } from "@/app/dashboard/components/modals/deleteWorkspaceModal/DeleteWorkspaceModal";
import { DeleteRecordingModal } from "@/app/dashboard/[id]/components/recordings/DeleteRecordingModal";

export const ModalProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <CreateWorkspaceModal />
      <DeleteWorkspaceModal />
      <DeleteRecordingModal />
    </>
  );
};
