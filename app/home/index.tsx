import {
	IconBrandBluesky,
	IconBrandGithub,
	IconBrandX,
	IconBrandYoutube,
	IconDeviceTv,
	IconLetterP,
	IconNews,
	IconPaperclip,
} from "@tabler/icons-react";
import AccountCard from "./AccountCard";
import avatarImage from "./avatar.png";
import WorkCard from "./WorkCard";

export function Home() {
	return (
		<main className="flex flex-col gap-4 px-4 py-8 max-w-(--breakpoint-sm) mx-auto min-h-screen">
			<div className="flex flex-col gap-2">
				<h1
					className="text-4xl w-full aspect-8/1 font-bold mask-[url(/logo.png)] mask-no-repeat mask-contain bg-black dark:bg-white"
					aria-label="たくしいのうぇぶさいと"
					style={{ imageRendering: "pixelated" }}
				></h1>
				<small className="block w-full text-right font-display">
					©2025 takusea
				</small>
			</div>
			<div className="flex flex-col gap-2">
				<p>たくしいです。</p>
				<p>お絵描き・動画投稿・プログラミング・ゲームなどをするひとです。</p>
			</div>
			<h2 className="text-2xl font-display leading-none mt-4">ACCOUNTS</h2>
			<AccountCard
				title="SNS"
				description="XとBlueskyで大体同じポストを上げてます（クロスポスト）"
				links={sns}
			/>
			<AccountCard
				title="VIDEO"
				description="YouTubeとニコニコで大体同じ動画を上げてます"
				links={video}
			/>
			<AccountCard
				title="OTHER"
				description="イラストとか開発とか"
				links={other}
			/>
			<h2 className="text-2xl font-display leading-none mt-4">WORKS</h2>
			<WorkCard
				title="BLOG"
				tags={["Dev"]}
				description="備忘録や雑記用のブログサイトづくり"
				links={blog}
			/>
			<WorkCard
				title="MUST CLIPPER"
				tags={["Dev"]}
				description="YouTubeとTwitchの複数クリップをひとまとめにしてシェアするサイト"
				links={mustClipper}
			/>
			<WorkCard
				title="VOICEVOX"
				tags={["Dev"]}
				description="VOICEVOX開発（主にデザイン）のコントリビュート"
				links={voicevox}
			/>
			<WorkCard
				title="ANIMATION"
				tags={["Video"]}
				description="ボイボ手書き劇場の制作"
				links={animation}
			/>
			<img
				src={avatarImage}
				className="fixed bottom-0 right-0 h-96 -z-10"
				style={{ imageRendering: "pixelated" }}
				alt=""
			/>
		</main>
	);
}

const sns = [
	{
		href: "https://x.com/takusea",
		name: "X(Twitter)",
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
		name: "niconico",
		icon: IconDeviceTv,
		color: "#252525",
	},
];

const other = [
	{
		href: "https://pixiv.net/users/81288254",
		name: "Pixiv",
		icon: IconLetterP,
		color: "#0096fa",
	},
	{
		href: "https://github.com/takusea",
		name: "GitHub",
		icon: IconBrandGithub,
		color: "#171515",
	},
];

const blog = [
	{
		href: "https://blog.takusea.com",
		name: "Blog",
		icon: IconNews,
		color: "#000000",
	},
];

const mustClipper = [
	{
		href: "https://mustclipper.takusea.com",
		name: "Website",
		icon: IconPaperclip,
		color: "#000000",
	},
];

const voicevox = [
	{
		href: "https://github.com/takusea/voicevox",
		name: "Source",
		icon: IconBrandGithub,
		color: "#171515",
	},
];

const animation = [
	{
		href: "https://youtube.com/playlist?list=PLgWIHb8dKRRAldYNfRbEh4mRXwsRwDmQ2",
		name: "YouTube",
		icon: IconBrandYoutube,
		color: "#ff0033",
	},
	{
		href: "https://nicovideo.jp/series/527537",
		name: "niconico",
		icon: IconDeviceTv,
		color: "#252525",
	},
];
