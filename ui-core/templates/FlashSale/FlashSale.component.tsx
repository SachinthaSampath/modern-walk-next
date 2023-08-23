import React from "react";
import { SectionLayout } from "@/ui-core";

import { ItemCard } from "@/ui-core";

import { FlashSaleProps } from "./FlashSaleProps";

export default function FlashSale({
  flashItems,
}: FlashSaleProps): React.JSX.Element {
  return (
    <div className="">
      <SectionLayout heading={"Flash Sale"}>
        {flashItems?.map((fi) => {
          return <ItemCard key={fi.id} itemData={fi} />;
        })}
      </SectionLayout>
    </div>
  );
}
