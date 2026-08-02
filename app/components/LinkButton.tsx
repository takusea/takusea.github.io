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
		className="flex items-center gap-2 px-4 h-12 text-white font-display dark:border dark:before:text-white before:text-black before:content-['>'] before:absolute before:right-full before:opacity-0 hover:before:opacity-100 relative"
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
