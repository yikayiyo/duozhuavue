module.exports = {
	mode: "jit",
	purge: ["./index.html", "./src/**/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		borderWidth: {
			DEFAULT: "1px",
			0: "0",
			0.5: "0.5px",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
