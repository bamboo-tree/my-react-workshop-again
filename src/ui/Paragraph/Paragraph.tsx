import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
	children: string;
} & ComponentProps<"p">;

export const Paragraph = ({ children, className }: Props) => {
	return (
		<p className={cn("bg-black text-white px-6 py-2", className)}>{children}</p>
	);
};
