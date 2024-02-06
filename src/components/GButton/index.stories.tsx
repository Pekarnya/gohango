import type { Meta, StoryObj } from "@storybook/react";
import { GButton } from ".";

const meta: Meta<typeof GButton> = {
  title: "Components/Button",
  component: GButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "click me",
    variant: "solid",
    size: "md",
    colorscheme: "primary",
  },
};

export const Outline: Story = {
  args: {
    children: "click me",
    variant: "outline",
    size: "md",
    colorscheme: "primary",
  },
};

export const Ghost: Story = {
  args: {
    children: "click me",
    variant: "ghost",
    size: "md",
    colorscheme: "primary",
  },
};
