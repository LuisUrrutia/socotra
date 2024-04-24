import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "@/components/Stepper";

const meta = {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    steps: 5,
    currentStep: 0,
  },
};

export const Secondary: Story = {
  args: {
    steps: 5,
    currentStep: 3,
  },
};
