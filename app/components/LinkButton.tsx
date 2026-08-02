type Props = {
	href: string;
	label: string;
	icon?: string;
	color: string;
};

const LinkButton = (props: Props) => (
	<a
		key={props.href}
		href={props.href}
		target="_blank"
		rel="noopener noreferrer"
		className="flex items-center gap-2 px-6 h-12 text-white font-display rounded-lg border-4 [border-image:url(/border-1-light.png)_2] dark:[border-image:url(/border-1-dark.png)_2] before:content-['>'] before:absolute before:left-1 before:opacity-0 hover:before:opacity-100 relative"
		style={{ backgroundColor: props.color }}
	>
		{props.icon && (
			<img
				src={props.icon}
				alt={props.label}
				width={32}
				height={32}
				style={{ imageRendering: "pixelated" }}
			/>
		)}
		<span>{props.label}</span>
	</a>
);

export default LinkButton;
