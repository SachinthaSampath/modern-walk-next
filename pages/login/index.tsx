import React from "react";
import { useUserContext } from "@/contexts";
import { UsersAPI } from "@/services";
import Link from "next/link";
import { LoginPageProps } from "./LoginPageProps";
import { useMutation } from "@tanstack/react-query";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button, Checkbox, H1 } from "@/ui-core";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui-core";
import { Input } from "@/ui-core";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import { EyeSlashIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

//define schema for the form
const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email cannot be empty.",
    })
    .email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, {
    message: "Password cannot be empty.",
  }),
  remember: z.boolean().default(false).optional(),
});

const LoginPage: React.FC<LoginPageProps> = (): React.JSX.Element => {
  const router = useRouter();

  //remove saved user from the local storage
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }

  //use contexts with custom hooks
  const { setUser } = useUserContext();

  //use reqct query mutation for login
  const loginUserMutation = useMutation({
    mutationFn: UsersAPI.seachUser,

    onSuccess: (data, variables, context) => {
      //variables - arguments send by mutate() call
      //console.log(variables);

      //validate login on query success
      if (data.length) {
        let valid_user = data[0];
        if (valid_user.password !== form.getValues().password) {
          form.setError(
            "password",
            { message: "Invalid password" },
            { shouldFocus: true }
          );
        } else {
          //login success
          //save login status
          if (typeof window !== "undefined") {
            window.localStorage.loggedIn = true;
          }

          //set user details
          setUser({
            email: valid_user.email,
            name: valid_user.name,
            username: valid_user.username,
            isLoggedIn: true,
          });

          if (form.getValues().remember) {
            //store in local storage **
            localStorage.setItem("user", JSON.stringify(valid_user));
          }

          router.push("/");
        }
      } else {
        //login fail
        form.setError(
          "email",
          {
            message:
              "We couldn't find your account. Try again or contact your admin",
          },
          { shouldFocus: true }
        );
      }
    },
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    //call react query mutation with parameters
    loginUserMutation.mutate({
      email: values.email,
    });
  }

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <H1 className="font-[Qhicksand] text-[48px] font-bold">
          <Link href="/">Modern Walk</Link>
        </H1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            id="form-login"
            className="mx-auto space-y-4 rounded-xl p-6 shadow-lg md:w-1/2 xl:w-1/3 "
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#182132]-500">
                    Email Address <span className="text-[#FD7967]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
                    py-1 text-sm placeholder-slate-400 shadow-sm
                    focus:border-sky-500 
                    focus:outline-none focus:ring-1 focus:ring-sky-500"
                      type="text"
                      id="uname"
                      placeholder="Username"
                      autoFocus
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
                <FormItem className="relative">
                  <FormLabel className="text-[#182132]-500">
                    Password <span className="text-[#FD7967]">*</span>
                  </FormLabel>
                  <FormControl>
                    <>
                      <Input
                        className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
                       py-1 text-sm placeholder-slate-400 shadow-sm
                       focus:border-sky-500 
                       focus:outline-none focus:ring-1 focus:ring-sky-500"
                        type="password"
                        id="psw"
                        placeholder="Password"
                        autoFocus
                        {...field}
                      />
                      <span
                        onClick={() => {}}
                        className="absolute right-2 top-9 inline-block h-4 w-4 overflow-hidden xl:right-3"
                      >
                        <EyeSlashIcon />
                      </span>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="my-0 py-0">
              <Link href="/signup" className="text-[#FD7967] hover:underline ">
                Forgot password?
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="remember"
                render={({ field }) => (
                  <FormItem className="flex  items-start ">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="chk"
                      />
                    </FormControl>
                    <FormLabel className="text-[#18213280]">
                      {" "}
                      Remember me
                    </FormLabel>
                  </FormItem>
                )}
              />

              <Button
                variant={"primary"}
                name="login"
                id="login"
                value="Login"
                className="mt-3 rounded-xl"
                type="submit"
              >
                Sign in
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
