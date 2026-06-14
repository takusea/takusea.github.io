import Card from "~/components/Card";
import LinkButton from "~/components/LinkButton";
import type { Link } from "./type";

type Props = {
	title: string;
	tags: string[];
	description: string;
	links: Link[];
};

const WorkCard = (props: Props) => (
	<Card>
		<h3 className="text-xl font-display leading-none">{props.title}</h3>
		<div className="flex gap-2">
			{props.tags.map((tag) => (
				<div key={tag} className="text-xs font-display">
					{tag}
				</div>
			))}
		</div>
		<p>{props.description}</p>
		<div className="grid grid-cols-[repeat(auto-fill,minmax(min(200px,100%),1fr))] items-center gap-4">
			{props.links.map((link) => (
				<LinkButton
					key={link.href}
					href={link.href}
					icon={link.icon}
					color={link.color}
					label={link.name}
				/>
			))}
		</div>
	</Card>
);

export default WorkCard;
