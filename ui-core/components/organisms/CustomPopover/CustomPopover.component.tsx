import React from "react";

import {
  Button,
  CustomPopoverProps,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from ".././../../../ui-core";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { cn } from "../../../../lib/utils";

const CustomPopover = ({
  triggerText,
  titleText,
  children,
  cancelText,
  actionText,
  actionAction,
  cancelAction,
  containerClassName,
  variant,
}: CustomPopoverProps) => {
  const containerClass = cn("min-h-[440px]", containerClassName);

  return (
    <>
      <Popover>
        <PopoverTrigger>{triggerText}</PopoverTrigger>
        <PopoverContent className="relative flex min-h-[300px] min-w-[432px] flex-col justify-between p-8 pb-4">
          <div>
            <h4 className="text-xl font-bold">{titleText}</h4>
            <PopoverClose className="absolute right-6 top-[34px]">
              <XMarkIcon className="h-5 w-5 text-[#182132]/30" />
            </PopoverClose>
          </div>
          <div className={containerClass}>{children}</div>
          <div className="space-x-[10px]">
            <Button
              onClick={cancelAction}
              className="h-12 w-44 rounded-[8px] px-6 pb-[10px] pt-[14px]"
              variant={"outline"}
            >
              {cancelText}
            </Button>
            <Button
              onClick={actionAction}
              autoFocus
              className="h-12 w-44 rounded-[8px] px-6 pb-[10px] pt-[14px]"
              variant={"primary"}
            >
              {actionText}
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CustomPopover;
