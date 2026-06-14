import Card from "~/components/Card";
import LinkButton from "~/components/LinkButton";
import type { Link } from "./type";

type Props = {
	title: string;
	description: string;
	links: Link[];
};

const AccountCard = (props: Props) => (
	<Card>
		<h3 className="text-xl font-display leading-none">{props.title}</h3>
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

export default AccountCard;
