"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RegisterSchema, RegisterSchemaType } from "@/validators/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { OpenModal } from "../OpenModal";
import { FormSucces } from "@/components/FormSuccess";
import { FormError } from "@/components/FormError";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { register } from "@/actions/register";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/constants";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  const [error, setError] = useState<string | undefined>("");
  const [succes, setSucces] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: RegisterSchemaType) => {
    setError("");
    setSucces("");

    startTransition(() => {
      register(values)
        .then((data) => {
          if (data.error) {
            form.reset();
            setError(data.error);
          }

          if (data.success) {
            form.reset();
            setSucces(data.success);
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input disabled={isPending} placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
              Register
            </Button>
            <OpenModal type="login">
              <span className="text-xs underline mt-2 cursor-pointer">
                Already have an account?
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

export default RegisterForm;
