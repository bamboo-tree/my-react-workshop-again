import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./Paragraph";

const meta = {
	title: "UI/Paragraph",
	component: Paragraph,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Paragraph",
		className: "text-blue-100 rounded-full",
	},
};
export const Secondary: Story = {
	args: {
		children: "Paragraph",
		className: "text-pink-300 rounded-md",
	},
};
