import { Home } from "../home";
import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
	return [{ title: "たくしいのうぇぶさいと" }];
}

export default function Page() {
	return <Home />;
}
