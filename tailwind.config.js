module.exports = {
	mode: "jit",
	purge: ["./index.html", "./src/**/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"back-to": "#666666f5",
				"search-input": "#f7f7f7",
				dbr: "rgb(214, 186, 140)",
				label: "rgb(242, 129, 129)",
				"menu-active": "#18c3aa",
				menu: "#f2f2f2",
				load: "rgb(73, 119, 73)",
				"load-more": "rgba(73, 119, 73, 0.08)",
				"sold-out": "rgb(170,170,170)",
				"oc-item": "rgb(238, 238, 238)",
				"oc-top": "rgb(203, 150, 37)",
				"oc-middle": "rgba(203, 150, 37, 0.3)",
				"oc-bottom": "rgba(203, 150, 37, 0.8)",
			},
			backgroundImage: {
				kindle: "url('/electronics/kindle.png')",
				elh: "url('/electronics/entry_level_headphone_v2.png')",
				sh: "url('/electronics/sports_headphone_v2.png')",
				nch: "url('/electronics/noise_canceling_headphone_v2.png')",
				hrh: "url('/electronics/high_resolution_headphone_v2.png')",
				switch: "url('/electronics/switch.png')",
				ps: "url('/electronics/playstation.png')",
				xbox: "url('/electronics/xbox.png')",
				swc: "url('/electronics/switch_cartridge.png')",
			},
			backgroundSize: {
				"60%": "60%",
			},
			boxShadow: {
				"book-list-item-image": "rgb(0 0 0 / 10%) 0px 0px 8px 0px",
			},
			width: {
				hicon: "1.4em",
				7.5: "30px",
				11.25: "45px",
				11.5: "46px",
				20: "80px",
				21: "84px",
				"oc-item": "132px",
			},
			lineHeight: {
				hsh: "1.1",
				"search-input": "24px",
				category: "1.4",
				1.6: "1.6",
			},
			minWidth: {
				4: "16px",
			},
			inset: {
				ct: "67px",
				45: "180px",
			},
			letterSpacing: {
				"brand-gender": "2px",
			},
			borderRadius: {
				menu: "19px",
				"50%": "50%",
				99: "99px",
				load: "2px",
				"oc-item": "5px",
			},
		},
		borderWidth: {
			DEFAULT: "1px",
			0: "0",
			0.5: "0.5px",
		},
		maxWidth: {
			dzy: "600px",
			"1/2": "50%",
			"3/4": "75%",
			full: "100%",
			elc: "95px",
		},
		minWidth: {
			"1/2": "50%",
		},
		height: {
			0.5: "2px",
			4.75: "19px",
			5: "20px",
			7.5: "30px",
			11.25: "45px",
			11.5: "46px",
			12: "3rem",
			20: "80px",
			30: "7.5rem",
			86: "21.5rem",
			full: "100%",
			screen: "100vh",
			"oc-item": "178px",
		},
		lineHeight: {
			"oc-title": "1.44",
			"extra-loose": "2.5",
			cbl: "0.91",
			4.75: "19px",
		},
		fontSize: {
			xss: "10px",
			cbl: "11px",
			xs: ".75rem",
			hsh: "13px",
			footer: "14px",
			sm: ".875rem",
			shiwu: "15px",
			base: "1rem",
			elc: "17px",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"brand-gender": "28px",
		},
		margin: {
			"bk-list-item-title": "-0.1em",
			"oc-title": "1.5px",
			0.75: "3px",
			1: "4px",
			1.25: "5px",
			1.5: "6px",
			2: "8px",
			2.25: "9px",
			2.5: "10px",
			2.625: "10.5px",
			3: "12px",
			3.5: "14px",
			3.75: "15px",
			"-3.75": "-15px",
			4: "16px",
			4.5: "18px",
			5: "20px",
			6.25: "25px",
			7.5: "30px",
			8: "32px",
			20: "80px",
			"-8.75": "-35px",
			auto: "auto",
		},
		padding: {
			1.25: "5px",
			1.5: "6px",
			1.875: "7.5px",
			2: "8px",
			2.25: "9px",
			2.5: "10px",
			3: "12px",
			3.75: "15px",
			4: "1rem",
			4.5: "18px",
			5: "20px",
			6.25: "25px",
			7.5: "30px",
			8.75: "35px",
			9: "36px",
			12: "3rem",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
