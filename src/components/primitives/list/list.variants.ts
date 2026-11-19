import type { VariantProps } from "tailwind-variants";

import { tv } from "../../../utils/tv";

export const listVariants = tv({
  base: "flex list-none flex-col gap-0.5 p-0",
});

export type ListVariantProps = VariantProps<typeof listVariants>;

export const listItemVariants = tv({
  base: [
    "flex w-full items-center gap-3 text-left",
    "rounded-element-sm border border-transparent px-2 py-1.5",
    "typography-body-md text-default-text-contrast",
    "transition-[background-color,opacity] duration-150 ease-in-out",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    // Interactive rows render as a button or link, and only those get hover styles.
    "[a&]:cursor-pointer [button&]:cursor-pointer",
    "[a&]:hover:bg-default-bg [button&]:hover:bg-default-bg",
    "focus-visible:border-accent-border focus-visible:ring-accent-bg focus-visible:ring-focus outline-none",
  ],
  variants: {
    active: {
      true: "bg-default-bg-hover [a&]:hover:bg-default-bg-hover [button&]:hover:bg-default-bg-hover",
    },
    muted: {
      true: [
        "opacity-50 focus-visible:opacity-100",
        "[a&]:hover:opacity-100 [button&]:hover:opacity-100",
      ],
    },
  },
});

export type ListItemVariantProps = VariantProps<typeof listItemVariants>;
