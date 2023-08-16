import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "disabled:bg-mwprimarydisabled disabled:text-white bg-mwprimarynormal hover:bg-mwprimaryhover focus:bg-mwprimaryselected text-primary-foreground hover:shadow-mwhover focus:shadow-mwselected",
        primary:
          "disabled:bg-mwprimarydisabled disabled:text-white bg-mwprimarynormal hover:bg-mwprimaryhover focus:bg-mwprimaryselected text-primary-foreground hover:shadow-mwhover focus:shadow-mwselected",
        outline:
          "border border-mwprimarynormal bg-white text-mwprimarynormal hover:bg-mwprimaryinverse hover:text-mwprimaryhover hover:shadow-mwhover focus:bg-mwprimaryinversehover focus:text-mwprimaryselected selected:shadow-mwselected disabled:border-mwprimarydisabled disabled:text-mwprimarydisabled  selected:shadow-mwselected hover:shadow-mwhover",
        danger:
          "bg-mwdangered hover:bg-mwdangerhover focus:bg-mwdangeractive disabled:bg-mwdangerdisabled  text-white  selected:shadow-mwselected hover:shadow-mwhover ",
        link: "text-white bg-mwlinkblue hover:bg-mwlinkhover focus:bg-mwlinkactive disabled:bg-mwlinkdisabled underline-offset-4 hover:underline",
        secondary:
          "bg-green-500 text-white hover:bg-green-600 focus:bg-green-700 selected:shadow-mwselected hover:shadow-mwhover",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export { buttonVariants };
