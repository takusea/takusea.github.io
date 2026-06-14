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
		scm-history-item:d%3A%5CUsers%5Ctakusea%5CDocuments%5CGitHub%5Ctakusea.github.io?%7B%22repositoryId%22%3A%22scm0%22%2C%22historyItemId%22%3A%22501950004f771f6b48b116dcf4369821a6a45532%22%2C%22historyItemParentId%22%3A%22db9aceea524c775b66246319b0e431ee461320ad%22%2C%22historyItemDisplayId%22%3A%225019500%22%7D{" "}
	</Card>
);

export default WorkCard;
