import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";

const buttonStyles = cva(
  ["rounded-tl-full", "rounded-br-full", "shadow-md", "font-sans"],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 p-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        primary: "text-black",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-primary-blush hover:bg-primary-rose",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "text-black border-primary-blush bg-transparent hover:bg-primary-rose",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-black bg-transparent hover:bg-primary-blush",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<button> & VariantProps<typeof buttonStyles>;

export const GButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme, className }))}
        {...props}
      />
    );
  }
);
