//@ts-nocheck
import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@/ui-core";

import { UserProvider, ThemeProvider } from "@/contexts";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/ui-core";
import Store1Layout from "@/ui-core/layouts/PageLayouts/Store1Layout";
import Store2Layout from "@/ui-core/layouts/PageLayouts/Store2Layout";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

const layout = {
  store1: Store1Layout,
  store2: Store2Layout,
};

export default function App({ Component, pageProps }: AppProps) {
  const TenantLayout =
    (layout[pageProps.tenant] as React.ReactNode) ?? React.Fragment;
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
            <TenantLayout>
              <ComponentLayout>
                <HeaderLayout />
                <Component {...pageProps} />
                <Toaster />
              </ComponentLayout>
            </TenantLayout>
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
  //appending the tenant to the context.request object
  const tenant = ctx?.pathname.match(/^\/([^/]+)/)[1]; 

  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps: { ...pageProps, tenant },
  };
};
