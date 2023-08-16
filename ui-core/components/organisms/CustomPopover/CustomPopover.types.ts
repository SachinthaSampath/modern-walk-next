import { variants } from "../../../../types";

export type CustomPopoverProps = {
  triggerText?: string | React.ReactNode;
  titleText?: string;
  children?: React.ReactNode | string;
  cancelText?: string | React.ReactNode;
  actionText?: string | React.ReactNode;
  cancelAction?: () => void;
  actionAction?: () => void;
  variant?: keyof typeof variants;
  containerClassName?: string;
};
