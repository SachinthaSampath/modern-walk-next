"use client";
import { useUserContext } from "@/contexts";
import React from "react";
import useEffect from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui-core";
import { Item } from "@/types/Item";
import { useRouter } from "next/router";

const CartPage = () => {
  const { user } = useUserContext();
  const router = useRouter();

  //   //if the user has not logged in, redirect to login
  //   useEffect(() => {
  //     if (!user.isLoggedIn) {
  //       router.push("/login");
  //     }
  //   },[]);

  //get the cart from local storage
  let cart: { id: number; qty: number; data: Item }[] = [];
  if (typeof window !== "undefined") {
    let cartRow = localStorage.getItem("cart");
    if (cartRow) {
      cart = JSON.parse(cartRow);
    }
  }

  return (
    <>
      <div>
        {user.isLoggedIn ? (
          <>
            <div className="container mx-auto mt-5 md:w-2/3">
              <Table>
                <TableCaption>List of your selected items.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Qty</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cart.map((item) => {
                    // console.log(item);
                    return (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.data?.title}</TableCell>
                        <TableCell>{item.qty}</TableCell>
                        <TableCell className="text-right">
                          Rs. {item.data?.price}
                        </TableCell>
                        <TableCell className="text-right">
                          Rs. {Number(item.data.price) * item.qty}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </>
        ) : (
          <>
            <p className="text-center text-xl text-red-700">
              Please login to continue...
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
