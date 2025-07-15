/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				generaPhoto: 'url(./assets/generalPhone.png)',
			},
			keyframes: {
				bottomLine: {
					'0%': { opacity: '0' },
					'100%': { opacity: '0.5' },
				},
				downArrow: {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(20px)' },
					'100%': { transform: 'translateY(0)' },
				},
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [],
}
