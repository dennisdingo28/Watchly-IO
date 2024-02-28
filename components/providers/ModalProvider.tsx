"use client";

import { CreateWorkspaceModal } from "@/app/dashboard/components/modals/createWorkspaceModal/CreateWorkspaceModal";
import { LoginModal } from "../modals/loginModal/LoginModal";
import { RegisterModal } from "../modals/registerModal/RegisterModal";
import { DeleteWorkspaceModal } from "@/app/dashboard/components/modals/deleteWorkspaceModal/DeleteWorkspaceModal";

export const ModalProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <CreateWorkspaceModal />
      <DeleteWorkspaceModal />
    </>
  );
};
