import { Home } from "../home";

const title = "たくしいのうぇぶさいと";
const description =
	"たくしいです。お絵描き・動画投稿・プログラミング・ゲームなどをするひとです。";
const url = "https://takusea.com";

export default function Page() {
	return (
		<>
			<title>{title}</title>
			<link rel="canonical" href={url} />
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:site_name" content={title} />
			<meta property="og:description" content={description} />
			<meta name="twitter:site" content="@takusea" />
			<Home />
		</>
	);
}
