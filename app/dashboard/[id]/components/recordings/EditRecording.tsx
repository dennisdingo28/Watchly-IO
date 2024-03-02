"use client";

import { UserAvatar } from "@/components/UserAvatar";
import { OpenModal } from "@/components/modals/OpenModal";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  EditRecordingSchema,
  EditRecordingSchemaType,
} from "@/validators/editRecording";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2 } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { HiDotsHorizontal } from "react-icons/hi";

interface EditRecordingProps {
  userName: string;
  userEmail: string;
  userImage: string;
}

export const EditRecording = ({
  userName,
  userImage,
  userEmail,
}: EditRecordingProps) => {
  const form = useForm<EditRecordingSchemaType>({
    resolver: zodResolver(EditRecordingSchema),
    defaultValues: {
      name: "1",
    },
  });
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <HiDotsHorizontal className="text-darkGray text-xl cursor-pointer z-50" />
      </DrawerTrigger>
      <DrawerContent className="">
        <div className="my-5 mx-auto w-full max-w-sm">
          <DrawerHeader className="p-0 mb-5 flex items-center justify-between">
            <div className="">
              <DrawerTitle>Edit Workspace Recording</DrawerTitle>
              <DrawerDescription>
                Set your daily recording preferences.
              </DrawerDescription>
            </div>
            <OpenModal type="deleteRecording">
              <Trash2 className="text-rose-500 w-[18px] h-[18px]" />
            </OpenModal>
          </DrawerHeader>
          <Form {...form}>
            <form className="mb-2.5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workspace Recording Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
            <div className="flex items-center justify-end mb-5">
              <Button type="submit" className="bg-black hover:bg-[#262626]">
                Save
              </Button>
            </div>
          </Form>
          <div className="space-y-2.5">
            <p className="text-darkGray text-sm">Signed as:</p>
            <div className="flex gap-2.5">
              <UserAvatar userImage={userImage} />
              <div className="">
                <p className="truncate text-md">{userName}</p>
                <p className="text-xs text-darkGray">{userEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
