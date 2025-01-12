/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#003366', // AZUL MARINO
					dark: '#001f33', // AZUL OSCURO
				},
				secondary: {
					DEFAULT: '#FFD700', // DORADO
					dark: '#FFC300', // ORO INTENSO
				},
				background: {
					light: '#FFFFFF', // BLANCO
					dark: '#121212', // GRIS OSCURO
				},
				success: {
					light: '#66CC99', // VERDE MENTA
					dark: '#2A9D70', // VERDE ESMERALDA
				},
				text: {
					light: '#333333', // GRIS OSCURO
					dark: '#CCCCCC', // GRIS CLARO
				},
				textSecondary: {
					light: '#666666', // GRIS CLARO
					dark: '#A3A3A3', // GRIS SUAVE
				},
				header: {
					light: '#003366', // AZUL MARINO
					dark: '#001f33', // AZUL OSCURO
				},
				surface: {
					light: '#F7F7F7', // GRIS CLARO
					dark: '#1E1E1E', // GRIS MEDIO
				},
				footer: {
					light: '#CCCCCC', // GRIS CLARO
					dark: '#1E1E1E', // GRIS MEDIO
				},
			},
		},
	},
	plugins: [],
};
