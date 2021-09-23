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
		maxWidth: {
			dzy: "600px",
		},
		height: {
			0.5: "2px",
			4.75: "19px",
			5: "20px",
			7.5: "30px",
			12: "3rem",
			30: "7.5rem",
			86: "21.5rem",
			screen: "100vh",
		},
		lineHeight: {
			"extra-loose": "2.5",
			4.75: "19px",
		},
		fontSize: {
			xss: "10px",
			xs: ".75rem",
			footer: "14px",
			sm: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
		},
		margin: {
			2.25: "9px",
			7.5: "30px",
			auto: "auto",
		},
		padding: {
			3.75: "15px",
			4: "1rem",
			7.5: "30px",
			12: "3rem",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
