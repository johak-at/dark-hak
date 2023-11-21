/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require("daisyui"), require('@tailwindcss/typography')],
	daisyui: {
		themes: ["synthwave", "cyberpunk", {
			johak: {
				"primary": "#005577",
				"secondary": "#E4003A",
				"accent": "#F7A823",
				"base-100": "#FFFFFF",
			}
		}]
	},
};

module.exports = config;
