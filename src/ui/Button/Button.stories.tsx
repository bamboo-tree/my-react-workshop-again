import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
	title: "UI/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: "Red",
		className: "bg-red-400 hover:bg-red-500",
		disabled: false,
	},
};
export const Green: Story = {
	args: {
		label: "Green",
		className: "bg-green-400 hover:bg-green-500",
		disabled: false,
	},
};
export const Blue: Story = {
	args: {
		label: "Blue",
		className: "bg-blue-400 hover:bg-blue-500",
		disabled: false,
	},
};
