/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xxs: "375px",
			xs: "380px",
			sm: "480px",
			md: "768px",
			lg: "976px",
			xls: "1200px",
			xl: "1440px",
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
				Montserrat: ["Montserrat", "sans-serif"],
			},
		},
		fontSize: {
			"2xsm": "10px",
			xsm: "12px",
			sm: "13px",
			reg: "15px",
			lg: "18px",
			"2xl": "22px",
			"3xl": "25px",
			"4xl": "32px",
			"5xl": "40px",
			"6xl": "50px",
			"7xl": "70px",
			"8xl": "80px",
			"9xl": "80px",
			"10xl": "100px",
		},
	},
	plugins: [],
};
