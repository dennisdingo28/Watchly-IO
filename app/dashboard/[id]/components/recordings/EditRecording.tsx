"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Form } from "@/components/ui/form";
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
      name: "",
    },
  });
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <HiDotsHorizontal className="text-darkGray text-xl cursor-pointer z-50" />
      </DrawerTrigger>
      <DrawerContent className="">
        <div className="mx-auto w-full max-w-sm">
          <Form {...form}>
            <form></form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
