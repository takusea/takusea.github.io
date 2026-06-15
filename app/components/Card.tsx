import type { JSX } from "react";

type Props = {
	children: JSX.Element[];
};

const Card = (props: Props) => (
	<div className="flex flex-col gap-2 p-4 bg-white/50 dark:bg-black/50 backdrop-blur-sm border shadow">
		{props.children}
	</div>
);

export default Card;
