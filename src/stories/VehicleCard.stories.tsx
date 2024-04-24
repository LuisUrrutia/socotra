import type { Meta, StoryObj } from "@storybook/react";
import { VehicleCard } from "@/components/VehicleCard";

const meta = {
  title: "Components/VehicleCard",
  component: VehicleCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof VehicleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    vehicle: {
      id: "1",
      year: 2020,
      make: "Toyota",
      model: "Corolla",
      value: 20000,
    }
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    vehicle: {
      id: "1",
      year: 2020,
      make: "Toyota",
      model: "Corolla",
      value: 20000,
    }
  },
};
