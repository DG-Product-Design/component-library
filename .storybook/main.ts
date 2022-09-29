module.exports = {
	"stories": [
		"../src/components/**/*.stories.@(mdx|tsx)",
		"../src/**/**/*.stories.@(mdx|tsx)",
		"../src/**/*.stories.@(mdx|tsx)"
	],
	"addons": [
		"@storybook/addon-essentials",
		"@storybook/addon-storysource",
		"@storybook/addon-interactions",
		"@storybook/preset-create-react-app"
	],
	"features": {
		"interactionsDebugger": true,
	},
	"framework": "@storybook/react",
	"core": {
		"builder": "@storybook/builder-webpack5"
	},
	"typescript": {
    "reactDocgen": "react-docgen-typescript",
	},
	"staticDirs": ["../public"],
};