import Card from "@/components/base/Card";
import LinkButton from "@/components/base/LinkButton";
import type { Link } from "@/types/link";

type Props = {
	title: string;
	description: string;
	links: Link[];
};

const AccountCard = (props: Props) => (
	<Card>
		<h3 class="text-xl font-display leading-none">{props.title}</h3>
		<p>{props.description}</p>
		<div class="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] items-center gap-4">
			{props.links.map((link) => (
				<LinkButton
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
