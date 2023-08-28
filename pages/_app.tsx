//@ts-nocheck
import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@/ui-core";

import { UserProvider, ThemeProvider } from "@/contexts";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/ui-core";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  //check whether the page has an individual layout defined
  const ComponentLayout = Component.getLayout ?? React.Fragment;
  const HeaderLayout =
    router.pathname.includes("/login") || router.pathname.includes("/signup")
      ? React.Fragment
      : Header;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ThemeProvider>
            <ComponentLayout>
              <HeaderLayout />
              <Component {...pageProps} />
              <Toaster />
            </ComponentLayout>
          </ThemeProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

//entry point for every single page in NextJs
App.getInitialProps = async ({
  Component,
  ctx,
}: {
  Component: any;
  ctx: NextPageContext;
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps: { ...pageProps },
  };
};
