import type { ReactNode } from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { getVariantProps } from "../../../utils/tailwind-variants";
import { Flex, Stack } from "../flex";
import { Text } from "../typography";
import {
  listItemVariants,
  listVariants,
  type ListItemVariantProps,
} from "./list.variants";

export type ListProps = useRender.ComponentProps<"ul">;

// NOTE: A list of buttons renders as a group instead
export function List({ className, render, ...props }: ListProps) {
  return useRender({
    defaultTagName: "ul",
    render,
    props: mergeProps<"ul">({ className: listVariants({ className }) }, props),
  });
}

export type ListItemProps = Omit<useRender.ComponentProps<"li">, "children"> &
  ListItemVariantProps & {
    label: ReactNode;
    description?: ReactNode;
    start?: ReactNode;
    end?: ReactNode;
  };

// The slots render as spans, so the row can render as a button or link
export function ListItem({
  label,
  description,
  start,
  end,
  className,
  render,
  ...props
}: ListItemProps) {
  const { variantProps, componentProps } = getVariantProps(
    props,
    listItemVariants.variantKeys
  );

  return useRender({
    defaultTagName: "li",
    render,
    props: mergeProps<"li">(
      {
        className: listItemVariants({ ...variantProps, className }),
        children: (
          <>
            {start != null && (
              <Flex as="span" className="shrink-0">
                {start}
              </Flex>
            )}
            {/* Grows from nothing, so a long label truncates before the end moves */}
            <Stack as="span" grow align="start" gap="none" className="min-w-0">
              <Text truncate>{label}</Text>
              {description != null && (
                <Text type="supporting" color="muted" truncate>
                  {description}
                </Text>
              )}
            </Stack>
            {end != null && (
              <Flex as="span" className="shrink-0">
                {end}
              </Flex>
            )}
          </>
        ),
      },
      componentProps
    ),
  });
}
