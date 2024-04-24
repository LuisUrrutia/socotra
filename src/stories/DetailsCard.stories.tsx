import type { Meta, StoryObj } from "@storybook/react";
import { DetailsCard } from "@/components/DetailsCard";
import { CarIcon } from "../components/icons/Car";

const meta = {
  title: "Components/DetailsCard",
  component: DetailsCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DetailsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    title: "Simple Card",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    title: "Complete Card",
    subtitle: "This is a subtitle",
  },
};

export const WithIcon: Story = {
  args: {
    icon: <CarIcon />,
    variant: "secondary",
    title: "Complete Card",
    subtitle: "This is a subtitle",
  },
};
