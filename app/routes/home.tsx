import { Home } from "../home";
import type { Route } from "./+types/home";

export function meta(args: Route.MetaArgs) {
	return [{ title: "たくしいのうぇぶさいと" }];
}

export default function Page() {
	return <Home />;
}
