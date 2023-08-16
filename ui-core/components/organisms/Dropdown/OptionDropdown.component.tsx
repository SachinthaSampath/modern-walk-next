import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../ui-core";
import { OptionDropdownProps } from "./Dropdown.types"; 
import { dropdownVariants } from "./Dropdown.dropdownVariants";
import { cn } from "../../../../lib/utils";

const OptionDropdown = ({ items, variant, size }: OptionDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(dropdownVariants({ variant, size }))}>
        <EllipsisVerticalIcon className="w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem key={Math.random()} onClick={item.click}>{item.text}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { OptionDropdown };
