"use client";

import { EarlyUser } from "@/actions/user";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { EarlyUserRequest, EarlyUserValidator } from "@/validators/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { SatelliteDishIcon } from "lucide-react";
import { useForm } from "react-hook-form";

export const WaitingForm = () => {
  const form = useForm<EarlyUserRequest>({
    resolver: zodResolver(EarlyUserValidator),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: EarlyUserRequest) {
    const data = await EarlyUser({ email: values.email});
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center justify-center gap-2"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="max-w-[400px] w-full">
              <FormControl>
                <Input
                  autoFocus
                  type="email"
                  className={cn(
                    "border-2 w-full border-purple tracking-wider text-[1em] text-center outline-none"
                  )}
                  placeholder="@email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          <SatelliteDishIcon className="animate-pulse" />
        </Button>
      </form>
    </Form>
  );
};
