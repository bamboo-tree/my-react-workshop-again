type Props = {
	children: string;
};

export const Text = (props: Props) => {
	return (
		<p className="text-pink-300 bg-black px-16 py-4 rounded-full">
			{props.children}
		</p>
	);
};
