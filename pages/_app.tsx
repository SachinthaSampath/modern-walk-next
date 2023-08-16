import '@/styles/globals.css'
import type { AppProps } from "next/app";
import { Header } from "@/ui-core";

import { UserProvider, ThemeProvider } from "@/contexts";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ThemeProvider>
            <Header headingText="Modern Walk" />
            <Component {...pageProps} />
          </ThemeProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}
