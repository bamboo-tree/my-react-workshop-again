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
		className:
			"text-black border-2 px-6 py-3 rounded bg-red-400 hover:bg-red-500",
		disabled: false,
	},
};
export const Green: Story = {
	args: {
		label: "Green",
		className:
			"text-black border-2 px-6 py-3 rounded bg-green-400 hover:bg-green-500",
		disabled: false,
	},
};
export const Blue: Story = {
	args: {
		label: "Blue",
		className:
			"text-black border-2 px-6 py-3 rounded bg-blue-400 hover:bg-blue-500",
		disabled: false,
	},
};
