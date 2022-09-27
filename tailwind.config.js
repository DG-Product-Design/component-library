module.exports = {
	content: [
		'./src/components/**/**/*.@(tsx|mdx)',
		'./src/components/**/*.@(tsx|mdx)',
		'./src/**/*.stories.@(tsx|mdx)',
		'./src/**/*.@(tsx|mdx)',
	],
	theme: {
		boxShadow: {
			'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
			'base': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
			'md': '0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
			'lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
			'xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			'none': '0 0 #0000',
			'inner': 'inset 0 0 8px rgb(33 48 53 / 0.35)',
			'inner-primary': 'inset 0 0 12px 0 rgb(180 65 0 / 0.25)',
			'inner-secondary': 'inset 0 0 12px 0 rgb(0 82 77 / 0.25)',

		},
		colors: {
			primary: '#EA701B',
			secondary: '#00524D',
			white: '#FFFFFF',
			orange: {
				50: '#FFF5ED',
				100: '#FFE5D1',
				300: '#EA701B',
				400: '#B44100',
				500: '#661800',
			},
			green: {
				50: '#EDFFF8',
				100: '#CEFFED',
				200: '#2AE9BB',
				300: '#007E6F',
				400: '#00524D',
				500: '#003936',
			},
			blue: {
				50: '#E5F4FF',
				100: '#C6E4FA',
				200: '#0C7BE1',
				300: '#0D59B2',
				400: '#0D3F7A',
				500: '#0C2C48',
			},
			slate: {
				50: '#F6F6F6',
				100: '#EBF1F2',
				200: '#BCCACB',
				300: '#849697',
				400: '#647778',
				500: '#435759',
				600: '#213035',
			},
			red: {
				100: '#FFE7E9',
				200: '#BD2130',
				300: '#980412',
			},
			caution: {
				100: '#FFF5DF',
				200: '#FFCC65',
				300: '#FFAB00',
			},
		},
		fontFamily: {
			sans: [
				'acumin-pro',
			],
			'body': [
				'acumin-pro',
			],
			'headline': [
				'proxima-nova'
			],
		},
		fontSize: {
			xs: ['0.75rem', { lineHeight: '1rem' }],
			sm: ['0.875rem', { lineHeight: '1.25rem' }],
			base: ['1rem', { lineHeight: '1.5rem' }],
			lg: ['1.25rem', { lineHeight: '1.75rem' }],
		},
		fontWeight: {
			light: '300',
			normal: '400',
			base: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
		},
		screens: {
			'xs': '360px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1440px',
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
};

