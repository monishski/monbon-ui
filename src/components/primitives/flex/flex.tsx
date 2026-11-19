import { forwardRef } from "react";

import type { PolymorphicProps } from "../../../types/utils";
import { getVariantProps } from "../../../utils/tailwind-variants";
import { flexVariants, type FlexVariantProps } from "./flex.variants";

// A span inside a button or link, which only allows phrasing content
export type FlexProps = PolymorphicProps<"div" | "span"> & FlexVariantProps;

export const Flex = forwardRef<HTMLDivElement & HTMLSpanElement, FlexProps>(
  ({ children, className, as = "div", ...props }, ref) => {
    const { variantProps, componentProps } = getVariantProps(
      props,
      flexVariants.variantKeys
    );

    const Component = as;

    return (
      <Component
        ref={ref}
        className={flexVariants({ ...variantProps, className })}
        {...componentProps}
      >
        {children}
      </Component>
    );
  }
);

Flex.displayName = "Flex";

export const Row = forwardRef<HTMLDivElement & HTMLSpanElement, FlexProps>(
  (props, ref) => {
    return <Flex ref={ref} direction="row" {...props} />;
  }
);

Row.displayName = "Row";

export const Stack = forwardRef<HTMLDivElement & HTMLSpanElement, FlexProps>(
  (props, ref) => {
    return <Flex ref={ref} direction="col" {...props} />;
  }
);

Stack.displayName = "Stack";
