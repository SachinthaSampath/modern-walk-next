"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Modern Walk Store 2</title>
        <meta
          name="description"
          content="This project is created as part of the full stack internship program offered by WireApps"
        />
        <meta name="author" content="Sachintha Sampath" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <button
          onClick={() => {
            router.push("/sub");
          }}
        >
          Go
        </button>
      </div>
    </>
  );
};

export default Page;
