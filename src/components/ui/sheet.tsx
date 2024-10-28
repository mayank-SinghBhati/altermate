"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      <svg
        width="28"
        height="38"
        viewBox="0 0 28 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[28px] w-auto absolute top-4 left-4"
      >
        <path
          d="M17.702 11.952C17.702 11.36 17.6527 10.7927 17.554 10.25C17.5047 9.70733 17.3567 9.23867 17.11 8.844C16.9127 8.4 16.592 8.05466 16.148 7.808C15.7533 7.512 15.186 7.364 14.446 7.364C14.0513 7.364 13.632 7.438 13.188 7.586C12.7933 7.68467 12.4233 7.882 12.078 8.178C11.8807 7.78333 11.7573 7.41333 11.708 7.068C11.6587 6.67333 11.634 6.27866 11.634 5.884C11.634 4.30533 12.3 2.998 13.632 1.962C14.964 0.925999 16.5673 0.407999 18.442 0.407999C21.402 0.407999 23.6713 1.17267 25.25 2.702C26.8287 4.182 27.618 6.328 27.618 9.14V38C26.4833 38 25.324 37.8767 24.14 37.63C23.0053 37.334 21.9447 36.8653 20.958 36.224C20.0207 35.5333 19.2313 34.6453 18.59 33.56C17.998 32.4253 17.702 30.9947 17.702 29.268V11.952ZM10.746 26.456C10.746 27.048 10.7707 27.6153 10.82 28.158C10.9187 28.7007 11.0667 29.194 11.264 29.638C11.5107 30.0327 11.8313 30.378 12.226 30.674C12.67 30.9207 13.262 31.044 14.002 31.044C14.3967 31.044 14.7913 30.9947 15.186 30.896C15.63 30.748 16.0247 30.526 16.37 30.23C16.5673 30.6247 16.6907 31.0193 16.74 31.414C16.7893 31.7593 16.814 32.1293 16.814 32.524C16.814 34.1027 16.148 35.41 14.816 36.446C13.484 37.482 11.8807 38 10.006 38C7.046 38 4.77667 37.2107 3.198 35.632C1.61933 34.0533 0.83 32.08 0.83 29.712V9.14C0.83 7.512 1.126 6.15533 1.718 5.07C2.35933 3.93533 3.14867 3.02266 4.086 2.332C5.07267 1.64133 6.13333 1.148 7.268 0.851997C8.452 0.555998 9.61133 0.407999 10.746 0.407999V26.456Z"
          fill="#FF7500"
        />
      </svg>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
