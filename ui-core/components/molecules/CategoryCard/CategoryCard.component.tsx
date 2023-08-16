import React from "react"; 
import  Link  from "next/link";
import { H1 } from "../../atoms";
import { CategoryCardProps } from "./CategoryCard.types";

export default function CategoryCard({
  name,
  page,
  className,
}: CategoryCardProps): React.JSX.Element {
  return (
    <div className={className}>
      <Link href={`/${page}`}>
        <H1>{name}</H1>
      </Link>
    </div>
  );
}
