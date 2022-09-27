import { addParameters } from '@storybook/react';
const a11yDark = require('./styles/a11y-dark-theme.scss')
import './styles/storybook-styles.scss';
import '../src/output.css';

addParameters({
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	docs: { 
		source: {
			language: 'tsx',
			prismTheme: a11yDark
		},
	},
	options: {
		storySort: {
			order: ['Welcome', 'Getting Started', 'Style Guide', ['Breakpoints', 'Colors', 'Shadows (Elevation)', 'Typography', 'Logos'], 'components']
		}
	},
	previewTabs: {
    'storybook/docs/panel': { index: -1 }, // changes order of Docs/Canvas tabs
  },
	viewMode: 'docs'
})