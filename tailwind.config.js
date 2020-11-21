const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./pages/*.js', './components/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Rubik', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
