import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./Button.buttonVariants";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export { type ButtonProps };
