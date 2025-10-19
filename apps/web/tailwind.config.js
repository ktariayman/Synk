/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--bg)",
				foreground: "var(--fg)",
				muted: "var(--muted)",
				border: "var(--border)",
				ring: "var(--ring)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-fg)",
				},
				card: {
					DEFAULT: "var(--surface)",
					foreground: "var(--fg)",
				},
			},
			borderRadius: {
				xl: "var(--radius)",
				"2xl": "calc(var(--radius) * 1.5)",
			},
		},
	},
	plugins: [],
};
