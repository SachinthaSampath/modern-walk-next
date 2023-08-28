import React from "react";
import { useRouter } from "next/router";
import { ProductsAPI } from "@/services";
import { Item } from "@/types";
import Image from "next/image";

const Item = ({ item }: { item: Item }) => {
  const router = useRouter();
  const { params } = router.query;
 

  return (
    <div className="container">
      <div className="flex flex-col space-y-3">
        <h1 className="font-bold text-xl">{item.title}</h1>
        <p>{item.description}</p>
        <Image src={item.image} width="300" height="300" alt="" />
      </div>
    </div>
  );
};

export default Item;

export async function getServerSideProps(context:any) {
  console.log("sever side console log");

  const { params, req, res } = context;

  //params is also the catch-all router parameter name
  const itemId = params?.params[0] ?? "";
 
  const data = await ProductsAPI.getProduct(itemId);
  
  return {
    props: {
      item: data,
    },
  };
}
