import iconBlog from "../assets/icon_blog.png";
import iconBluesky from "../assets/icon_bluesky.png";
import iconGithub from "../assets/icon_github.png";
import iconMustclipper from "../assets/icon_mustclipper.png";
import iconNiconico from "../assets/icon_niconico.png";
import iconPixiv from "../assets/icon_pixiv.png";
import iconX from "../assets/icon_x.png";
import iconYoutube from "../assets/icon_youtube.png";
import type { Link } from "../types/link";

export const sns: Link[] = [
	{
		href: "https://x.com/takusea",
		name: "X(Twitter)",
		icon: iconX,
		color: "#000000",
	},
	{
		href: "https://bsky.app/profile/takusea.com",
		name: "Bluesky",
		icon: iconBluesky,
		color: "#006aff",
	},
];

export const video: Link[] = [
	{
		href: "https://youtube.com/c/takusea",
		name: "YouTube",
		icon: iconYoutube,
		color: "#ff0033",
	},
	{
		href: "https://nicovideo.jp/user/131128563",
		name: "niconico",
		icon: iconNiconico,
		color: "#252525",
	},
];

export const other: Link[] = [
	{
		href: "https://pixiv.net/users/81288254",
		name: "Pixiv",
		icon: iconPixiv,
		color: "#0096fa",
	},
	{
		href: "https://github.com/takusea",
		name: "GitHub",
		icon: iconGithub,
		color: "#171515",
	},
];

export const blog: Link[] = [
	{
		href: "https://blog.takusea.com",
		name: "Blog",
		icon: iconBlog,
		color: "#000000",
	},
];

export const mustClipper: Link[] = [
	{
		href: "https://mustclipper.takusea.com",
		name: "Website",
		icon: iconMustclipper,
		color: "#000000",
	},
];

export const voicevox: Link[] = [
	{
		href: "https://github.com/takusea/voicevox",
		name: "Source",
		icon: iconGithub,
		color: "#171515",
	},
];

export const animation: Link[] = [
	{
		href: "https://youtube.com/playlist?list=PLgWIHb8dKRRAldYNfRbEh4mRXwsRwDmQ2",
		name: "YouTube",
		icon: iconYoutube,
		color: "#ff0033",
	},
	{
		href: "https://nicovideo.jp/series/527537",
		name: "niconico",
		icon: iconNiconico,
		color: "#252525",
	},
];
