/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#1E3A8A',
				},
				secondary: {
					DEFAULT: '#38BDF8',
				},
				lightGray: {
					DEFAULT: '#F3F4F6',
				},
				darkGray: {
					DEFAULT: '#1F2937',
				},
				accent: {
					DEFAULT: '#10B981',
				},
			},
		},
	},
	plugins: [],
};
