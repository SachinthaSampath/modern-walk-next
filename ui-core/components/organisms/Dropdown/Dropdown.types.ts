export type CustomDropdownProps = {
  text: string;
  variant:
    | "link"
    | "ghost"
    | "secondary"
    | "danger"
    | "outline"
    | "primary"
    | "default";
  size?: "default" | "sm" | "lg" | "icon" | null | undefined,
  items: {
    text: string;
    click: () => void;
  }[];
};

export type OptionDropdownProps = {
  variant:
    | "link"
    | "ghost"
    | "secondary"
    | "danger"
    | "outline"
    | "primary"
    | "default";
  size?: "default" | "sm" | "lg" | "icon" | null | undefined,
  items: {
    text: string;
    click: () => void;
  }[];
};
