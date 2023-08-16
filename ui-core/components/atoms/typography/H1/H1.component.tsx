import { H1Props } from "./H1.types";

export default function H1({
  children,
  className,
}: H1Props): React.JSX.Element {
  return <h1 className={className}>{children}</h1>;
}
