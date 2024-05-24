/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	plugins: [],
	theme: {
		container: { center: true, screens: { "2xl": "1440px" } },
		extend: {
			colors: {
				background: "#f7f8f9",
				foreground: "#556987",
				secondary: "#2a3342",
				primary: "#22c55e",
				"primary-foreground": "#f8f6ff",
			},
			screens: { "2xl": "1440px" },
		},
	},
};
