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
		height: {
			0.5: "2px",
			7.5: "30px",
			12: "3rem",
			30: "7.5rem",
			screen: "100vh",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
