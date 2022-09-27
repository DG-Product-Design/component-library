const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../../tailwind.config.js');
const fullConfig = resolveConfig(tailwindConfig);

function getTailwindTheme() {
	return fullConfig.theme;
}

function getTailwindColors() {
	return fullConfig.theme.colors;
}

export {
	getTailwindColors,
	getTailwindTheme
}