import React from "react";
import { Button, H2 } from "../../../../ui-core";
import { Item } from "../../../../types/Item";
import { ItemCardProps } from "./ItemCard.types";
import { useToast } from "../../../../ui-core";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import Link from "next/link";
import { useUserContext } from "../../../../contexts";

export default function ItemCard({
  itemData,
}: ItemCardProps): React.JSX.Element {
  const { title, price, image, description, category, id } = itemData;
  const { user } = useUserContext();
  const { toast } = useToast();

  function addItemToCart(item: Item) {
    let id = item.id;
    //get the cart from local storage
    let cartRow = localStorage.getItem("cart");
    let cart: { id: number; qty: number; data: Item }[] = [];
    if (cartRow) {
      cart = JSON.parse(cartRow);
    } else {
      cart = [];
    }
    //check if the item exits
    let found = false;
    let newCart = cart.map((item) => {
      if (item.id == id) {
        found = true;
        return { id, qty: item.qty + 1, data: item.data };
      } else {
        return item;
      }
    });
    if (!found) {
      newCart.push({ id, qty: 1, data: item });
    }

    if (!user.isLoggedIn) {
      toast({
        title: "Item added!",
        description: item.title,
      });
    } else {
      toast({
        title: "Item added!",
        description: item.title,
      });
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return (
    <>
      <div>
        <Card className="flex min-w-[250px] max-w-[250px] flex-col items-center justify-start overflow-hidden rounded-[20px] bg-white">
          <CardHeader className="h-24 overflow-hidden ">
            <CardTitle className=" text-md mt-1 text-center font-medium line-clamp-2">
              <Link href={`/products/${itemData.id}`}>{title}</Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-1 flex h-28 items-center">
            <img
              src={image}
              alt="Modern Walk Sale item"
              className="max-h-[100px] w-[100px]"
            />
          </CardContent>
          <CardFooter
            className={`flex min-h-[150px] w-full flex-col content-start items-center overflow-hidden rounded-xl p-2 ${
              category === "men's clothing" ? "bg-mens" : "bg-womens"
            }`}
          >
            <H2 className="font-bold text-[#0E42FD]">Rs {price}</H2>

            <CardDescription className="p-3">
              <p className="line-clamp-[4] text-center text-sm text-black ">
                {description}
              </p>
            </CardDescription>
            <p className="pb-1">
              <Button size={"sm"} onClick={() => addItemToCart(itemData)}>
                Add to Cart
              </Button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
