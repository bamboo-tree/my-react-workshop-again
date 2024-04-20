import { MouseEventHandler, ComponentProps } from "react";

type Props = {
	label: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<"button">;

export const Button = ({ label, onClick, ...rest }: Props) => {
	return (
		<button
			className="text-white bg-gray-500 border-2 px-6 py-3 rounded disabled:true"
			onClick={onClick}
			{...rest}
		>
			{label}
		</button>
	);
};
