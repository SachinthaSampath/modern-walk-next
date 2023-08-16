import { H2 } from "../../components/atoms";
import { SectionLayoutProps } from "./SectionLayout.types";

export default function SectionLayout({
  children,
  heading,
}: SectionLayoutProps): React.JSX.Element {
  return (
    <div className="flex justify-center mt-14">
      <div className="space-y-5 px-10">
        <H2 className="px-4 text-3xl font-semibold">{heading}</H2>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"> {children}</div>
      </div>
    </div>
  );
}
