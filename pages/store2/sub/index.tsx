"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => {}}>
        <Link href="/">Go to / (link)</Link>
      </button>

      <button
        onClick={() => {
          router.push("/");
        }}
      >
        GO to / (button)
      </button>
    </div>
  );
};

export default Page;
