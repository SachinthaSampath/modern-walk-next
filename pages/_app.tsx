//@ts-nocheck
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@/ui-core";

import { UserProvider, ThemeProvider } from "@/contexts";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/ui-core";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {

  //check whether the page has an individual layout defined
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <ThemeProvider>
              <Component {...pageProps} />
              <Toaster/>
            </ThemeProvider>
          </UserProvider>
        </QueryClientProvider>
      </>
    );
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ThemeProvider>
            <Header headingText="Modern Walk" />
            <Component {...pageProps} />
            <Toaster/>
          </ThemeProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}
