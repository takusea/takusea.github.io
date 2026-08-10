import type { ImageMetadata } from "astro";
import borderImage from "@/assets/border_button.png";

type Props = {
	href: string;
	label: string;
	icon?: ImageMetadata;
	color: string;
};

const LinkButton = (props: Props) => (
	<a
		key={props.href}
		href={props.href}
		target="_blank"
		rel="noopener noreferrer"
		className="flex items-center gap-2 px-6 h-12 text-white font-display rounded-lg border-8 before:content-['>'] before:absolute before:left-1 before:opacity-0 hover:before:opacity-100 relative"
		style={{
			backgroundColor: props.color,
			borderImage: `url(${borderImage.src}) 4`,
		}}
	>
		{props.icon && (
			<img
				src={props.icon.src}
				alt=""
				width={32}
				height={32}
				style={{ imageRendering: "pixelated" }}
			/>
		)}
		<span>{props.label}</span>
	</a>
);

export default LinkButton;
