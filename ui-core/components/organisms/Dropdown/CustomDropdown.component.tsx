import React from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../ui-core";
import { CustomDropdownProps } from "./Dropdown.types";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const CustomDropdown = ({
  text,
  items,
  variant,
  size,
}: CustomDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className="">
          {text}
          <ChevronDownIcon className="ml-2"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem onClick={item.click}>{item.text}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { CustomDropdown };
