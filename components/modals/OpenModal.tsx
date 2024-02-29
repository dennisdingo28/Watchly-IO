"use client";
import { ModalData, ModalType, useModal } from "@/hooks/use-modal";
import { FC } from "react";

interface OpenModalProps {
  onClick?: (e: React.MouseEvent) => void;
  type: ModalType;
  children: React.ReactNode;
  data?: ModalData;
}

export const OpenModal: FC<OpenModalProps> = ({
  type,
  children,
  data,
  onClick,
}) => {
  const { onOpen } = useModal();

  const handleClick = (e: React.MouseEvent) => {
    onOpen(type, data);

    // Check if onClick prop is provided before invoking it
    if (onClick) {
      onClick(e);
    }
  };

  return <div onClick={handleClick}>{children}</div>;
};
