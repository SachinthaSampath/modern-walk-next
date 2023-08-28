//@ts-nocheck

import { ProductsAPI } from "@/services";
import { Item } from "@/types";
import { ItemCard, SectionLayout } from "@/ui-core";
import Link from "next/link";

function ProductList({ products }: { products: Item[] }) {
  return (
    <div className="container">
      <SectionLayout heading={""}>
        {products?.map((fi) => {
          return <ItemCard key={fi.id} itemData={fi} />;
        })}
      </SectionLayout>
    </div>
  );
}
export default ProductList;

export async function getStaticProps() {
  const response = await ProductsAPI.getAllProducts();

  return {
    props: {
      products: response,
    },
  };
}
