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
import { PlayCircle, Trash2 } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { HiDotsHorizontal } from "react-icons/hi";
import { Recording } from "./Recording";
import Image from "next/image";

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
      <DrawerContent className="bg-gradient-to-b from-[#d9d7fe] to-white ">
        <div className="my-5 mx-auto w-full max-w-sm">
          <DrawerHeader className="p-0 mb-5 flex items-center justify-between">
            <div className="">
              <DrawerTitle>Edit Workspace Recording</DrawerTitle>
              <DrawerDescription>
                Set your daily recording preferences.
              </DrawerDescription>
            </div>
            <OpenModal type="deleteRecording">
              <Trash2 className="text-rose-500 w-[18px] h-[18px] cursor-pointer" />
            </OpenModal>
          </DrawerHeader>
          <div className="flex flex-col mb-5">
            <div className="relative">
              <Image
                src="/about1.jpg"
                width={300}
                height={300}
                alt="video-thumbnail"
                className="border-2 object-cover w-full max-h-[300px]"
              />
              <div className="absolute bg-black bg-opacity-65 inset-0 flex items-center justify-center">
                <div className="space-y-2.5 text-darkGray">
                  <PlayCircle className="w-[64px] h-[64px]  mx-auto" />
                  <span className="text-sm text-center">12:05 minutes</span>
                </div>
              </div>
            </div>
          </div>
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
