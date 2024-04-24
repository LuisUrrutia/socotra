import type { Meta, StoryObj } from "@storybook/react";
import { DriverCard } from "@/components/DriverCard";

const meta = {
  title: "Components/DriverCard",
  component: DriverCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DriverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    driver: {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      licenseNumber: "E123456",
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    driver: {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      licenseNumber: "E123456",
    },
  },
};
