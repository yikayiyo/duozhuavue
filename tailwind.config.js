module.exports = {
	mode: "jit",
	purge: ["./index.html", "./src/**/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"search-input": "#f7f7f7",
				"menu-active": "#18c3aa",
				menu: "#f2f2f2",
			},
			backgroundImage: {
				kindle: "url('/public/electronics/kindle.png')",
				elh: "url('/public/electronics/entry_level_headphone_v2.png')",
				sh: "url('/public/electronics/sports_headphone_v2.png')",
				nch: "url('/public/electronics/noise_canceling_headphone_v2.png')",
				hrh: "url('/public/electronics/high_resolution_headphone_v2.png')",
				switch: "url('public/electronics/switch.png')",
				ps: "url('public/electronics/playstation.png')",
				xbox: "url('public/electronics/xbox.png')",
				swc: "url('/public/electronics/switch_cartridge.png')",
			},
			backgroundSize: {
				"60%": "60%",
			},
		},
		borderWidth: {
			DEFAULT: "1px",
			0: "0",
			0.5: "0.5px",
		},
		borderRadius: {
			menu: "19px",
		},
		maxWidth: {
			dzy: "600px",
			"1/2": "50%",
			"3/4": "75%",
			elc: "95px",
		},
		height: {
			0.5: "2px",
			4.75: "19px",
			5: "20px",
			7.5: "30px",
			12: "3rem",
			20: "80px",
			30: "7.5rem",
			86: "21.5rem",
			full: "100%",
			screen: "100vh",
		},
		lineHeight: {
			"extra-loose": "2.5",
			cbl: "0.91",
			4.75: "19px",
		},
		fontSize: {
			xss: "10px",
			cbl: "11px",
			xs: ".75rem",
			footer: "14px",
			sm: ".875rem",
			base: "1rem",
			elc: "17px",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
		},
		margin: {
			1.25: "5px",
			2.25: "9px",
			2.5: "10px",
			3.75: "15px",
			4: "16px",
			4.5: "18px",
			7.5: "30px",
			auto: "auto",
		},
		padding: {
			1.25: "5px",
			1.5: "6px",
			1.875: "7.5px",
			2: "8px",
			2.25: "9px",
			2.5: "10px",
			3.75: "15px",
			4: "1rem",
			4.5: "18px",
			5: "20px",
			7.5: "30px",
			9: "36px",
			12: "3rem",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
