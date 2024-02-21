"use client";
import { ModalType, useModal } from "@/hooks/use-modal";
import { FC } from "react";

interface OpenModalProps {
  type: ModalType;
  children: React.ReactNode;
}

export const OpenModal: FC<OpenModalProps> = ({ type, children }) => {
  const { onOpen } = useModal();

  return <div onClick={() => onOpen(type)}>{children}</div>;
};
