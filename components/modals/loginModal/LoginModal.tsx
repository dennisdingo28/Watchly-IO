"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useModal } from "@/hooks/use-modal";
import LoginForm from "./LoginForm";

const LoginModal = () => {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type == "login";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-bl from-[#d9d7fe] to-white">
        <DialogHeader>
          <DialogTitle className="text-center py-2 text-2xl font-bold">
            Welcome back !
          </DialogTitle>
          <Separator />
          <LoginForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
