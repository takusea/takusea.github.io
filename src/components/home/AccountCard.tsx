import type { Link } from "../../types/link";
import Card from "../base/Card";
import LinkButton from "../base/LinkButton";

type Props = {
	title: string;
	description: string;
	links: Link[];
};

const AccountCard = (props: Props) => (
	<Card>
		<h3 className="text-xl font-display leading-none">{props.title}</h3>
		<p>{props.description}</p>
		<div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] items-center gap-4">
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

export default AccountCard;
