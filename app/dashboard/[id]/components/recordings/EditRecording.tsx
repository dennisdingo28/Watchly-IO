"use client";

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
import React from "react";
import { useForm } from "react-hook-form";
import { HiDotsHorizontal } from "react-icons/hi";

export const EditRecording = () => {
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
          <DrawerHeader className="p-0 mb-5 flex items-center">
            <div className="">
              <DrawerTitle>Edit Workspace Recording</DrawerTitle>
              <DrawerDescription>
                Set your daily recording preferences.
              </DrawerDescription>
            </div>
            <Button
              // disabled={isPending}
              // onClick={() =>
              //   deleteWorkspace({ workspaceId: data.workspaceId! })
              // }
              className="bg-rose-500 hover:bg-[#c1314a]"
            >
              {/* {isPending && <Loader2 className="h-4 w-4 animate-spin mr-2" />} */}
              Delete
            </Button>
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
            <div className="flex items-center justify-end">
              <Button type="submit" className="bg-black hover:bg-[#262626]">
                Save
              </Button>
            </div>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
