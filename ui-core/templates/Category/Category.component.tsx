import React from "react";
import { SectionLayout } from "../../layouts";
import { CategoryCard, H2 } from "../../components";

export default function Category(): React.JSX.Element {
  return (
    <>
      <div className="my-14">
        <div className="w-100 space-y-5">
          <H2 className="ml-8 px-4 text-2xl font-semibold">Categories</H2>
          <div className="xl:gri mt-14 grid grid-cols-1 gap-4  px-10 md:grid-cols-2">
            <CategoryCard
              className="rounded-[15px] bg-mens p-[40px] text-center text-2xl font-bold text-white"
              name="Men's Clothing"
              page="mens"
            />
            <CategoryCard
              className="rounded-[15px] bg-womens p-[40px] text-center text-2xl font-bold text-white"
              name="Women's Clothing"
              page="womens"
            />
          </div>
        </div>
      </div>
    </>
  );
}
