"use client";
import Link from "next/link";

import { H1 } from "../../atoms";
import { useUserContext } from "../../../../contexts";
import { HeaderProps } from "./Header.types";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  CustomPopover,
  CustomDialog,
} from "@/ui-core";
import { ShoppingCartIcon } from "lucide-react";
import { useToast } from "@/ui-core";
import { Item } from "@/types";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header({
  headingText,
}: HeaderProps): React.JSX.Element {
  const { user } = useUserContext();
  if (!headingText) {
    headingText = "Modern Walk";
  }
  // const navigate = useNavigate();
  const { toast } = useToast();
  const router = useRouter();
  return (
    <>
      <Menubar className="mt-0 h-12 w-full justify-end space-x-2 rounded-none border-0 bg-mwprimarynormal text-white">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link
                href={`${process.env.REACT_APP_BASE_URL}`}
                passHref
                legacyBehavior
              >
                <a target="_blank">
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </a>
              </Link>
            </MenubarItem>
            <MenubarItem
              onClick={() => {
                console.log(document.URL);

                return;
                window.open(
                  document.URL,
                  "_blank",
                  "location=yes,height=570,width=520,scrollbars=yes,status=yes"
                );
              }}
            >
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem
              onClick={() => {
                window.open(
                  document.URL,
                  "incognito",
                  "location=yes,height=570,width=520,scrollbars=yes,status=yes"
                );
              }}
            >
              New Incognito Window
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem
                  onClick={() => {
                    let currentURL = window.location.href;
                    let subject = "Check out this link";
                    let body =
                      "Hey! This was developed by Sachintha (intern of WireApps) as part of the ModernWalk system of the WireApps internship FE program. I just wanted to share this link with you: " +
                      currentURL;
                    let mailtoLink =
                      "mailto:?subject=" +
                      encodeURIComponent(subject) +
                      "&body=" +
                      encodeURIComponent(body);
                    let newWindow = window.open("");
                    newWindow!.window.location.href = mailtoLink;
                  }}
                >
                  Email link
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem
              onClick={() => {
                window.print();
              }}
            >
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              onClick={() => {
                window.open(process.env.REACT_APP_REPO_URL, "_blank");
              }}
            >
              View Repository <MenubarShortcut>ctrl+k</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <CustomPopover
            triggerText={<ShoppingCartIcon />}
            titleText="Your Cart"
            cancelText={
              <CustomDialog
                triggerText="Clear Cart"
                titleText="Clear Cart"
                cancelText="Cancel"
                actionText="Confirm"
                containerClassName="min-h-[200px]"
                actionAction={() => {
                  localStorage.removeItem("cart");
                  toast({
                    title: "Cart cleared!",
                  });
                  router.refresh();
                }}
                cancelAction={() => {}}
              >
                <p className="text-[16px] font-normal text-[#182132]">
                  All the items in your cart will be removed! Please confirm to
                  proceed.
                </p>
              </CustomDialog>
            }
            actionText="Checkout"
            containerClassName="min-h-[20px]"
            actionAction={() => {
              router.push("/cart");
            }}
            cancelAction={() => {
              // localStorage.removeItem("cart");
              // toast({
              //   title: "Cart cleared!",
              // });
              // router.push("/");
            }}
          >
            <div className="text-[18px] font-normal text-[#182132]">
              {(() => {
                if (typeof window !== "undefined") {
                  //get the cart from local storage
                  let cartRow = localStorage.getItem("cart");
                  let cart: { id: number; qty: number; data: Item }[] = [];
                  if (cartRow) {
                    cart = JSON.parse(cartRow);
                  }
                  let total = cart.reduce(
                    (accumulator, currentVal) =>
                      accumulator +
                      Number(currentVal.data.price) * currentVal.qty,
                    0
                  );

                  // cart.map((item) => {
                  //   console.log(item);
                  //   return (
                  //     <>
                  //       <p>{item.data?.title}</p>
                  //       <p>{item.qty}</p>
                  //       <p className="text-right">Rs. {item.data?.price}</p>
                  //       <p className="text-right">
                  //         Rs. {Number(item.data.price) * item.qty}{" "}
                  //       </p>
                  //     </>
                  //   );
                  // });

                  return (
                    <p className="flex space-x-7">
                      <span>Total :</span> <strong> Rs. {total} </strong>{" "}
                    </p>
                  );
                }
              })()}
            </div>
          </CustomPopover>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            {user.isLoggedIn ? (
              <>
                <Image
                  className="w-4 text-white lg:w-6"
                  src="/user.png"
                  alt="User icon"
                  width="24"
                  height="24"
                />
                &nbsp;{user?.name}
              </>
            ) : (
              <>Profile</>
            )}
          </MenubarTrigger>
          <MenubarContent>
            {user.isLoggedIn ? (
              <>
                <MenubarItem>
                  <Link href="/login" className="w-full">
                    Logout
                  </Link>
                </MenubarItem>
              </>
            ) : (
              <>
                <MenubarItem>
                  <Link href="/login" className="w-full">
                    Login
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/signup" className="w-full">
                    SignUp
                  </Link>
                </MenubarItem>
              </>
            )}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex justify-between px-3 py-4">
        <div className="flex h-10 w-full justify-center overflow-hidden">
          <div className="text-center text-3xl font-bold ">
            <H1>{headingText}</H1>
          </div>
        </div>
      </div>
    </>
  );
}
