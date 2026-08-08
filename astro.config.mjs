import { fileURLToPath, URL } from "node:url";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"~": fileURLToPath(new URL("./app", import.meta.url)),
			},
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
