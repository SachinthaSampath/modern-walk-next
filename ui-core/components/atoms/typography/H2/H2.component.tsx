import { H2Props } from "./H2.types";

export default function H2({
  children,
  className,
}: H2Props): React.JSX.Element {
  return <h2 className={className}>{children}</h2>;
}
