import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	integrations: [solidJs()],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			tsconfigPaths: true,
		},
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Press Start 2P",
			cssVariable: "--font-display",
		},
	],
});
