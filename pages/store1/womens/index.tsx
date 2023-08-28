//this page use client side data fetching

import React from "react";

import { ItemCard } from "@/ui-core/components";
import { SectionLayout } from "@/ui-core/layouts";

import { Item } from "@/types";
import { ProductsAPI } from "@/services";
import { useQuery } from "@tanstack/react-query";
const Womens = () => {
  const { data, isLoading, isError } = useQuery(
    ["womens"],
    ProductsAPI.getWomensProducts
  );

  return (
    <SectionLayout heading={"Women's Clothing"}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((i: Item) => {
          return <ItemCard key={i.id} itemData={i} />;
        })
      )}
    </SectionLayout>
  );
};

export default Womens;
