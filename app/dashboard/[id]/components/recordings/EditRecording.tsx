import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

export const EditRecording = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <HiDotsHorizontal className="text-darkGray text-xl cursor-pointer z-50" />
      </DrawerTrigger>
      <DrawerContent className="bg-darkGray">
        <div className="mx-auto w-full max-w-sm">hai</div>
      </DrawerContent>
    </Drawer>
  );
};
