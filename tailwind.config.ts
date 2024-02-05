import { type Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import radixPlugin from 'tailwindcss-radix'

import { extendedTheme } from './app/utils/extended-theme.ts'

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	darkMode: 'class',
	theme: {
		colors: {
			gray: {
				'50': '#f4f2f2',
				'100': '#e4dddd',
				'200': '#cbbdbf',
				'300': '#ad9799',
				'400': '#96797e',
				'500': '#876b71',
				'600': '#735b62',
				'700': '#5e4a51',
				'800': '#514249',
				'900': '#493d43',
				'950': '#282024',
			},
		},

		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: extendedTheme,

	},


	plugins: [animatePlugin, radixPlugin],
} satisfies Config