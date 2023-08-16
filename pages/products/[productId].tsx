import React from "react";
import { useRouter } from "next/router";
import { ProductsAPI } from "@/services";
import { Item } from "@/types";
import Image from "next/image";

const Product = ({ product }: { product: Item }) => {
  const router = useRouter();
  const { params = [] } = router.query;

  return (
    <div className="container">
      <div className="flex flex-col space-y-3">
        <h1 className="font-bold text-xl">{product.title}</h1>
        <p>{product.description}</p>
        <img src={product.image} width="300" height="300" alt="" />
      </div>
    </div>
  );
};

export default Product;

export async function getServerSideProps(context: any) {
  const { params, req, res } = context;
  const { productId } = params;

  const response = await ProductsAPI.getProduct(params.productId);
  console.log(response);
  return {
    props: {
      product: response,
    },
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { productId: "1" } },
//       { params: { productId: "2" } },
//       { params: { productId: "3" } },
//     ],
//     fallback: "blocking",
//   };
// }
