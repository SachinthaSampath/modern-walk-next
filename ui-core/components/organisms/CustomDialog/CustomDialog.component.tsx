import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  Button,
  DialogClose,
} from "../../../../ui-core";
import { CustomDialogProps } from "./CustomDialog.types";
import { cn } from "../../../../lib/utils";
const CustomDialog = ({
  triggerText,
  titleText,
  children,
  cancelText,
  actionText,
  actionAction,
  cancelAction,
  containerClassName,
  variant,
}: CustomDialogProps) => {
  const containerClass = cn(
    "min-h-[48px] flex items-center",
    containerClassName
  );
  return (
    <>
      <Dialog>
        <DialogTrigger>{triggerText}</DialogTrigger>
        <DialogContent className="min-h-[287px] min-w-[432px] p-8 pb-4">
          <DialogHeader className="">
            <DialogTitle className="text-[24px] font-bold">
              {titleText}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className={containerClass}>
            {children}
          </DialogDescription>
          <DialogFooter>
            <div className="flex w-full justify-end  space-x-[21px]">
              <DialogClose>
                <Button
                  onClick={cancelAction}
                  className="h-12 w-44 rounded-[8px] px-6 pb-[10px] pt-[14px]"
                  variant={"outline"}
                >
                  {cancelText}
                </Button>
              </DialogClose>
              <Button
                onClick={actionAction}
                autoFocus
                className="h-12 w-44 rounded-[8px] px-6 pb-[10px] pt-[14px]"
                variant={"primary"}
              >
                <DialogClose>{actionText}</DialogClose>
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustomDialog;
