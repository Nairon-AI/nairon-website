import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [
		tanstackStart(),
		nitro(),
		viteTsConfigPaths(),
		tailwindcss(),
	],
	ssr: {
		noExternal: ["@convex-dev/better-auth"],
	},
});
