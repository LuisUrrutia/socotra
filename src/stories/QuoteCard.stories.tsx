import type { Meta, StoryObj } from "@storybook/react";
import { QuoteCard } from "@/components/QuoteCard";

const meta = {
  title: "Components/QuoteCard",
  component: QuoteCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof QuoteCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cost: 1500,
  },
};

export const Example: Story = {
  args: {
    cost: 30
  },
};
