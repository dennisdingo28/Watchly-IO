"use client";
import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Separator } from "../../ui/separator";
import { useModal } from "@/hooks/use-modal";
import RegisterForm from "./RegisterForm";

interface LoginModalProps {}

export const RegisterModal: FC<LoginModalProps> = () => {
  const { isOpen, type, onClose } = useModal();

  const isModalOpen = isOpen && type === "register";
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-bl from-[#d9d7fe] to-white">
        <DialogHeader>
          <DialogTitle className="text-center py-2 text-2xl font-bold">
            Create your account
          </DialogTitle>
          <Separator />
        </DialogHeader>
        <RegisterForm />
      </DialogContent>
    </Dialog>
  );
};

