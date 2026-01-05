import {
	IconBrandBluesky,
	IconBrandGithub,
	IconBrandX,
	IconBrandYoutube,
	IconDeviceTv,
	IconNews,
	type Icon,
} from "@tabler/icons-react";
import footerImage from "./footer.png";

export function Home() {
	return (
		<main className="flex flex-col gap-4 p-4 max-w-screen-sm mx-auto min-h-screen">
			<h1 className="text-4xl font-bold">たくしいのうぇぶさいと</h1>
			<p>たくしいのうぇぶさいとです。</p>
			<p>お絵描き・動画投稿・プログラミング・ゲームなどをするひとです。</p>
			<h2 className="text-xl font-bold">SNS</h2>
			<p>XとBlueskyで大体同じポストを上げてます。（クロスポスト）</p>
			<LinkGridView links={sns} />
			<h2 className="text-xl font-bold">Video</h2>
			<p>YouTubeとニコニコで大体同じ動画を上げてます。</p>
			<LinkGridView links={video} />
			<h2 className="text-xl font-bold">Tech</h2>
			<p>開発とか</p>
			<LinkGridView links={tech} />
			<footer className="flex justify-center mt-auto text-white">
				<small>©2025 takusea</small>
			</footer>
			<img
				src={footerImage}
				className="fixed bottom-0 left-0 w-screen -z-10"
				style={{ imageRendering: "pixelated" }}
				alt=""
			/>
		</main>
	);
}

type Link = {
	href: string;
	name: string;
	icon: Icon;
	color: string;
};

const LinkGridView = (props: { links: Link[] }) => (
	<div className="grid grid-cols-[repeat(auto-fill,minmax(min(200px,100%),1fr))] items-center gap-4">
		{props.links.map((link) => (
			<a
				key={link.href}
				href={link.href}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2 p-4 text-white font-semibold border border-white/10 rounded-lg"
				style={{ backgroundColor: link.color }}
			>
				<link.icon />
				<span>{link.name}</span>
			</a>
		))}
	</div>
);

const sns = [
	{
		href: "https://x.com/takusea",
		name: "X (旧Twitter)",
		icon: IconBrandX,
		color: "#000000",
	},
	{
		href: "https://bsky.app/profile/takusea.com",
		name: "Bluesky",
		icon: IconBrandBluesky,
		color: "#006aff",
	},
];

const video = [
	{
		href: "https://youtube.com/c/takusea",
		name: "YouTube",
		icon: IconBrandYoutube,
		color: "#ff0033",
	},
	{
		href: "https://nicovideo.jp/user/131128563",
		name: "ニコニコ",
		icon: IconDeviceTv,
		color: "#252525",
	},
];

const tech = [
	{
		href: "https://blog.takusea.com",
		name: "Blog",
		icon: IconNews,
		color: "#00ab86",
	},
	{
		href: "https://github.com/takusea",
		name: "GitHub",
		icon: IconBrandGithub,
		color: "#171515",
	},
];
