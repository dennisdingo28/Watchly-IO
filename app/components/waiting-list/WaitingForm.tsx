"use client";

import { EarlyUser } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { EarlyUserRequest, EarlyUserValidator } from "@/validators/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { SatelliteDishIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export const WaitingForm = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const form = useForm<EarlyUserRequest>({
    resolver: zodResolver(EarlyUserValidator),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: EarlyUserRequest) {
    setIsPending(true);
    const data = await EarlyUser({ email: values.email });

    if (data.isError) toast.error(data.message);
    else toast.success(data.message);

    setIsPending(false);
  }

  useEffect(() => {
    if (form.formState.errors && Object.keys(form.formState.errors).length > 0)
      setIsError(true);

    setTimeout(() => {
      setIsError(false);
      form.setValue("email", "");
    }, 1700);
  }, [form,form.formState.errors]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row items-center justify-center gap-2.5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="max-w-[400px] w-full">
              <FormControl>
                <Input
                  disabled={isPending}
                  type="text"
                  className={cn(
                    "border-2 w-full border-purple tracking-wider text-[1em] text-center outline-none",
                    isError ? "animate-move" : ""
                  )}
                  placeholder={isError ? "invalid email" : "@email"}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit" className="text-[1em] font-semibold">
          Enter <SatelliteDishIcon className="ml-2 animate-pulse" />
        </Button>
      </form>
    </Form>
  );
};
