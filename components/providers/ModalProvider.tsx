"use client";

import LoginModal from "../modals/loginModal/LoginModal";
import RegisterModal from "../modals/registerModal/RegisterModal";

export const ModalProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
    </>
  );
};
