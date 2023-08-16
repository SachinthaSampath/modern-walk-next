import { cva } from "class-variance-authority";

const dropdownVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium  transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "disabled:bg-mwprimarydisabled disabled:text-white bg-mwprimarynormal hover:bg-mwprimaryhover focus:bg-mwprimaryselected text-primary-foreground",
        primary:
          "disabled:text-mwprimarydisabled hover:bg-mwprimaryhover hover:text-white font-bold focus:bg-mwprimaryselected text-mwprimarynormal",
        outline:
          "bg-white text-mwprimarynormal hover:bg-mwprimaryinverse hover:text-mwprimaryhover focus:bg-mwprimaryinversehover focus:text-mwprimaryselected selected:shadow-mwselected disabled:text-mwprimarydisabled",
        danger:
          "bg-mwdangered hover:bg-mwdangerhover focus:bg-mwdangeractive disabled:bg-mwdangerdisabled  text-white",
        link: "text-white bg-mwlinkblue hover:bg-mwlinkhover focus:bg-mwlinkactive disabled:bg-mwlinkdisabled underline-offset-4 hover:underline",
        secondary:
          "bg-green-500 text-white hover:bg-green-600 focus:bg-green-700",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 p-1",
        sm: "h-9 rounded-md p-1",
        lg: "h-11 rounded-md p-1",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export { dropdownVariants };
