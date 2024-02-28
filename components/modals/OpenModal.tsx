"use client";
import { ModalData, ModalType, useModal } from "@/hooks/use-modal";
import { FC } from "react";

interface OpenModalProps {
  type: ModalType;
  children: React.ReactNode;
  data?: ModalData;
}

export const OpenModal: FC<OpenModalProps> = ({ type, children, data }) => {
  const { onOpen } = useModal();

  return <div onClick={() => onOpen(type, data)}>{children}</div>;
};
