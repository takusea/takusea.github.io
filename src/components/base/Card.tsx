import type { JSX } from "react";
import borderImage from "@/assets/border_card.png";

type Props = {
	children: JSX.Element[];
};

const Card = (props: Props) => (
	<div
		className="flex flex-col gap-2 p-4 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border-solid border-12"
		style={{
			imageRendering: "pixelated",
			borderImage: `url(${borderImage.src}) 6`,
		}}
	>
		{props.children}
	</div>
);

export default Card;
