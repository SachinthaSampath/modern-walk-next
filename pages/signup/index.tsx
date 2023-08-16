import React, { useState } from "react";
import { createUser } from "@/services/user.service";
import Link from "next/link";
import { SignUpPageProps } from "./SignUpPageProps";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UsersAPI } from "@/services";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  auth,
  createUserDocumentFromAuth,
  signInWithGithubPopup,
  signInWithGooglePopup,
} from "@/utils/Firebase.utils";

import { Button } from "@/ui-core";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui-core";
import { Input } from "@/ui-core";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const formSchema = z
  .object({
    name: z
      .string()
      .min(5, {
        message: "Name must be atleast 5 characters.",
      })
      .max(45, { message: "Name can be maximum 45 characters." }),
    email: z
      .string()
      .min(1, { message: "Email cannot be empty." })
      .email("This is not a valid email.")
      .refine((e) => true, "This email is already registered."),
    username: z
      .string()
      .min(1, "Username cannot be empty.")
      .max(15, "Username cannot be more than 15 characters long."),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const SignUpPage: React.FC<SignUpPageProps> = (): React.JSX.Element => {
  //set state
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [rePassword, setRePassword] = useState("");

  //navigation
  const router = useRouter();

  //queryClient to invalidate query data
  const quaryClient = useQueryClient();

  //crate mutation
  const signUpUserMutation = useMutation({
    mutationFn: UsersAPI.createUser,
    onSuccess: (data, variables, context) => {
      showValidSignUp();
      //invalidate cached query result
      quaryClient.invalidateQueries(["users"]);
    },
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    //send valid data to mutation
    signUpUserMutation.mutate({
      name: values.name,
      username: values.username,
      password: values.password,
      email: values.email,
    });
  }

  //function to handle form submission
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    //validate name
    if (!name.trim()) {
      let el = document.getElementById("name");
      el?.focus();
      return;
    }

    //validate email
    if (!email.trim()) {
      let el = document.getElementById("email");
      el?.focus();
      return;
    }

    //validate username
    if (!uname.trim()) {
      // alert("Please enter valid username!");
      let el = document.getElementById("uname");
      el?.focus();
      return;
    }

    //validate password
    if (!password) {
      // alert("Please enter valid password!");
      let el = document.getElementById("psw");
      el?.focus();
      return;
    }
    //compare passwords
    if (password !== rePassword) {
      let el = document.getElementById("repsw") as HTMLInputElement;
      el?.focus();
      el?.select();
      return;
    }
  };

  //show invalid sign up status
  const showInvalidSignUp = () => {
    alert("Unable to sign up!");
  };

  //show valid sign up status
  const showValidSignUp = () => {
    alert("Sign up success!");
    //redirect to login page
    router.push("/login");
  };

  return (
    <div className="flex h-screen  items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto space-y-4 rounded-xl p-6 shadow-lg md:w-1/2 xl:w-1/3 "
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col items-stretch">
                <FormControl>
                  <Input
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
             py-1 text-sm placeholder-slate-400 shadow-sm
             focus:border-sky-500 
             focus:outline-none focus:ring-1 focus:ring-sky-500"
                    type="text"
                    placeholder="Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex flex-col items-stretch">
                <FormControl>
                  <Input
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
             py-1 text-sm placeholder-slate-400 shadow-sm
             focus:border-sky-500 
             focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="Username"
                    {...field}
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col items-stretch">
                <FormControl>
                  <Input
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
             py-1 text-sm placeholder-slate-400 shadow-sm
             focus:border-sky-500 
             focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="Email"
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
              <FormItem className="flex flex-col items-stretch">
                <FormControl>
                  <Input
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
             py-1 text-sm placeholder-slate-400 shadow-sm
             focus:border-sky-500 
             focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="Password"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="flex flex-col items-stretch">
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
             py-1 text-sm placeholder-slate-400 shadow-sm
             focus:border-sky-500 
             focus:outline-none focus:ring-1 focus:ring-sky-500"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Confirm your password by re-typing it.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <p className="my-4 flex justify-end space-x-[16px]">
              <Button variant={"outline"} type="button" className="w-[99px]">
                <Link href="/login">Login</Link>
              </Button>
              <Button variant={"primary"} type="submit" className="w-[99px]">
                SignUp
              </Button>
            </p>

            <p className="my-4 flex justify-end space-x-[16px]">
              <Button
                variant={"link"}
                type="button"
                className="w-[200px]"
                onClick={async () => {
                  // const { user } = await signInWithGooglePopup();
                  const { user } = await signInWithGooglePopup();
                  console.log(user);
                  const userDocRef = createUserDocumentFromAuth(user);
                  console.log(userDocRef);
                }}
              >
                SignUp with Google
              </Button>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUpPage;
