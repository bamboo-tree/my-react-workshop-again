import { MouseEventHandler, ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
	label: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<"button">;

export const Button = ({ label, className, onClick, ...rest }: Props) => {
	return (
		<button
			className={cn(
				"text-white bg-gray-500 border-2 px-6 py-3 rounded disabled:true",
				className
			)}
			onClick={onClick}
			{...rest}
		>
			{label}
		</button>
	);
};
