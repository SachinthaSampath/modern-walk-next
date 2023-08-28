import React from "react";
import { useRouter } from "next/router";
import { ProductsAPI } from "@/services";
import { Item } from "@/types";
import Image from "next/image";

const Product = ({ product }: { product: Item }) => {
  const router = useRouter();
  const { params = [] } = router.query;

  //for fallback:true
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

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

// export async function getServerSideProps(context: any) {
//   const { params, req, res } = context;
//   const { productId } = params;

//   const response = await ProductsAPI.getProduct(params.productId);
//   console.log(response);
//   return {
//     props: {
//       product: response,
//     },
//   };
// }

export async function getStaticProps(context: any) {
  //run only on server-side
  const { params, req, res } = context;
  const { productId } = params;

  const data = await ProductsAPI.getProduct(params.productId);
  console.log(data);

  //not found products - send not found status
  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data,
    },
    //incremental static generation - revalidate duration
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: "1" } },
      { params: { productId: "2" } },
      { params: { productId: "3" } },
    ],
    fallback: true,
  };
}
