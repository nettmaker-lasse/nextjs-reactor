import { NavbarContext, StudioLogo, defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";

import StudioNavbar from "./components/studio/StudioNavbar";
import Logo from "./components/studio/Logo";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
	basePath: "/studio",
	name: "Reactor-studio",
	title: "Reactor studio",

	projectId,
	dataset,

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
	studio: {
		components: {
			logo: Logo,
			navbar: StudioNavbar
		}
	},
	theme: myTheme
});
