import { ProductsAPI } from "@/services";
import { Item } from "@/types";
import React from "react";
import { ItemCard } from "@/ui-core/components";
import { SectionLayout } from "@/ui-core/layouts";

const Category = ({ items, title }: { items: Item[]; title: string }) => {
  return (
    <SectionLayout heading={title}>
      {items?.map((i: Item) => {
        return <ItemCard key={i.id} itemData={i} />;
      })}
    </SectionLayout>
  );
};

export default Category;

export async function getStaticProps(context: any) {
  const { params } = context;
  let data = [];
  if (params.category === "mens") {
    data = await ProductsAPI.getMensProducts();
  } else if (params.category === "womens") {
    data = await ProductsAPI.getWomensProducts();
  } else {
    data = await ProductsAPI.getAllProducts();
  }

  return {
    props: {
      items: data,
      title: params.category === "mens" ? "Men's Clothing" : "Women's Clothing",
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: "mens" } },
      { params: { category: "womens" } },
    ],
    fallback: false,
  };
}
