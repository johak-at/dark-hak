/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require("daisyui"), require('@tailwindcss/typography')],
	daisyui: {
		themes: ["synthwave", "cyberpunk", "corporate", {
			johak: {
				...require("daisyui/src/theming/themes")["corporate"],
				"primary": "#005577",
				"secondary": "#E4003A",
				"accent": "#F7A823",
				"base-100": "#FFFFFF",
				"base-content": "#180F00",
				"neutral": "#1A2E3C"
			}
		}]
	},
};

module.exports = config;
