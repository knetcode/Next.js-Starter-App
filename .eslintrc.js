const { off } = require("process")

module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: [
		"airbnb",
		"airbnb-typescript",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"prettier",
		"plugin:@next/next/recommended",
	],
	plugins: ["@typescript-eslint", "import"],
	settings: {
		next: {
			rootDir: ["apps/*/", "packages/*/"],
		},
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
				project: ["apps/*/tsconfig.json"],
			},
		},
	},
	rules: {
		// react
		"react/function-component-definition": [
			2,
			{
				namedComponents: "arrow-function",
			},
		],

		// disabled
		"react/jsx-props-no-spreading": "off",
		"react/button-has-type": "off",
		"@next/next/no-html-link-for-pages": "off",
		"@next/next/no-img-element": "off",
		"jsx-a11y/anchor-is-valid": "off",
		"arrow-body-style": "off",
		"react/no-array-index-key": "off",
		radix: "off",
	},
	overrides: [
		{
			// 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
			env: {
				jest: true,
			},
			files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
			extends: ["plugin:testing-library/react", "plugin:jest/recommended"],
			rules: {
				"import/no-extraneous-dependencies": ["off", { devDependencies: ["**/?(*.)+(spec|test).[jt]s?(x)"] }],
			},
		},
	],
	ignorePatterns: [
		"**/*.js",
		"**/*.json",
		"node_modules",
		"public",
		"styles",
		".next",
		"coverage",
		"dist",
		".turbo",
		"api",
		"Map.tsx",
		"Marker.tsx",
		"AutoComplete.tsx",
	],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: "./tsconfig.json",
	},
}
