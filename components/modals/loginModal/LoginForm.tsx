"use client";
import { FormError } from "@/components/FormError";
import { FormSucces } from "@/components/FormSuccess";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema, LoginSchemaType } from "@/validators/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { OpenModal } from "../OpenModal";
import { login } from "@/actions/login";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/constants";


const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [succes, setSucces] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginSchemaType) => {
    setError("");
    setSucces("");
    startTransition(() => {
      login(values, DEFAULT_LOGIN_REDIRECT)
        .then((data) => {
          console.log(data);
          if (data?.success) {
            form.reset();
            setSucces(data?.success);
          }
          if (data?.error) {
            form.reset();
            setError(data?.error);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="john.doe@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  type="password"
                  placeholder="******"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormSucces messaage={succes} />
        <FormError messaage={error} />
        <div className="flex items-center justify-end">
          <div className="flex flex-col">
            <Button
              disabled={isPending}
              type="submit"
              className="bg-black hover:bg-[#262626] ml-auto"
            >
              Login
            </Button>
            <OpenModal type="register">
              <span className="text-xs underline mt-2 cursor-pointer">
                Don&apos;t have an account?
              </span>
            </OpenModal>
          </div>
        </div>

        <Separator />
        <Button
          type="button"
            onClick={() =>
              signIn("google", {
                callbackUrl: DEFAULT_LOGIN_REDIRECT,
              })
            }
          className="w-full bg-inherit hover:bg-inherit border-2 text-black"
        >
          <FcGoogle className="mr-2 text-xl" />
          Continue with Google
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
