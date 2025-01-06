import {
	IconBrandGithub,
	IconBrandX,
	IconBrandYoutube,
	IconDeviceTv,
} from "@tabler/icons-react";
import footerImage from "./footer.png";

export function Home() {
	return (
		<main className="flex flex-col gap-8 p-4 max-w-screen-sm mx-auto min-h-screen">
			<h1 className="text-4xl font-bold">たくしいのうぇぶさいと</h1>
			<p>たくしいのうぇぶさいとです。かっこかり。</p>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(min(200px,100%),1fr))] items-center gap-4">
				{socials.map((social) => (
					<a
						key={social.href}
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 p-4 text-white font-semibold border border-white/10 rounded-lg"
						style={{ backgroundColor: social.color }}
					>
						<social.icon />
						<span>{social.name}</span>
					</a>
				))}
			</div>
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

const socials = [
	{
		href: "https://x.com/takusea",
		name: "X (旧Twitter)",
		icon: IconBrandX,
		color: "#000000",
	},
	{
		href: "https://github.com/takusea",
		name: "GitHub",
		icon: IconBrandGithub,
		color: "#171515",
	},
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
