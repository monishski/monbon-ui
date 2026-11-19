import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Store } from "lucide-react";

import { Avatar } from "../../src/components/primitives/avatar";
import { List, ListItem, listItemVariants } from "../../src/components/primitives/list";
import type { ListItemVariantProps } from "../../src/components/primitives/list";
import { getLogo } from "../utils/images";
import { getVariantArgTypes } from "../utils/storybook";

const variantArgTypes = getVariantArgTypes<ListItemVariantProps>({
  variants: listItemVariants.variants,
  defaultVariants: listItemVariants.defaultVariants,
  descriptions: {
    active: "Marks the row as selected",
    muted: "Recedes the row behind an active one",
  },
});

const meta = {
  title: "Components/Content/List",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Corner Shop",
    description: "14 transactions",
    start: (
      <Avatar
        size="sm"
        src={getLogo({ color: "#30a46c", shape: "square" })}
        alt=""
        fallback={<Store />}
      />
    ),
    end: <span className="font-number">−£312.40</span>,
  },
  argTypes: {
    label: { control: "text", description: "The row's main text, truncated to one line" },
    description: { control: "text", description: "Supporting text below the label" },
    start: { control: false, description: "Before the label, e.g. an avatar or icon" },
    end: { control: false, description: "After the label, e.g. an amount or badge" },
    ...variantArgTypes,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

const merchants = [
  {
    id: "corner-shop",
    name: "Corner Shop",
    logo: getLogo({ color: "#30a46c", shape: "square" }),
    count: 14,
    amount: "−£312.40",
  },
  {
    id: "bakery",
    name: "Bakery",
    logo: getLogo({ color: "#f76b15", shape: "circle" }),
    count: 22,
    amount: "−£184.50",
  },
  {
    id: "bookshop",
    name: "Bookshop with a name long enough to truncate",
    logo: getLogo({ color: "#0090ff", shape: "triangle" }),
    count: 6,
    amount: "−£96.20",
  },
  {
    id: "no-merchant",
    name: "No merchant",
    logo: undefined,
    count: 5,
    amount: "−£64.10",
  },
  {
    id: "gym",
    name: "Gym",
    logo: getLogo({ color: "#e5484d", shape: "diamond" }),
    count: 1,
    amount: "+£41.80",
  },
];

type Merchant = (typeof merchants)[number];

// The label already names the merchant, so the logo is decorative
const getMerchantRowProps = ({ name, logo, count, amount }: Merchant) => ({
  start: <Avatar size="sm" src={logo} alt="" fallback={<Store />} />,
  label: name,
  description: count === 1 ? "1 transaction" : `${count} transactions`,
  end: <span className="font-number">{amount}</span>,
});

export const Default: Story = {
  render: (args) => (
    <List>
      <ListItem {...args} />
    </List>
  ),
};

export const Merchants: Story = {
  render: (args) => (
    <List>
      {merchants.map((merchant) => (
        <ListItem key={merchant.id} {...args} {...getMerchantRowProps(merchant)} />
      ))}
    </List>
  ),
};

// A list of buttons isn't a list of list items, so it renders as a group
export const Selectable: Story = {
  render: function Render() {
    const [selectedIds, setSelectedIds] = useState(["bakery"]);
    const hasSelection = selectedIds.length > 0;

    return (
      <List render={<div role="group" aria-label="Merchants" />}>
        {merchants.map((merchant) => {
          const isSelected = selectedIds.includes(merchant.id);

          return (
            <ListItem
              key={merchant.id}
              {...getMerchantRowProps(merchant)}
              render={<button type="button" aria-pressed={isSelected} />}
              active={isSelected}
              muted={hasSelection && !isSelected}
              onClick={() => {
                setSelectedIds((current) =>
                  isSelected
                    ? current.filter((id) => id !== merchant.id)
                    : [...current, merchant.id]
                );
              }}
            />
          );
        })}
      </List>
    );
  },
};

export const AsLinks: Story = {
  render: () => (
    <List>
      {merchants.map((merchant) => (
        <li key={merchant.id}>
          <ListItem {...getMerchantRowProps(merchant)} render={<a href="#" />} />
        </li>
      ))}
    </List>
  ),
};
