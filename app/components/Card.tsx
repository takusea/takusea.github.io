import type { JSX } from "react";

type Props = {
	children: JSX.Element[];
};

const Card = (props: Props) => (
	<div className="flex flex-col gap-2 p-4 bg-white/75 backdrop-blur-sm border">
		{props.children}
	</div>
);

export default Card;
