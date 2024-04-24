import { InsuranceSummary } from '@/components/InsuranceSummary';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/InsuranceSummary',
  component: InsuranceSummary,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof InsuranceSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    insuranceCost: 3000,
    vehicles: [
      {
        id: "1",
        year: 2020,
        make: "Toyota",
        model: "Corolla",
        value: 20000,
      },
      {
        id: "2",
        year: 2021,
        make: "Toyota",
        model: "Camry",
        value: 25000,
      },
    ],
    drivers: [
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        licenseNumber: "E123456",
      },
      {
        id: "2",
        firstName: "Jane",
        lastName: "Doe",
        licenseNumber: "E654321",
      }
    ]
  },
};


