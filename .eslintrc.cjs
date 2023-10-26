module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'prettier'],
	parserOptions: {
		//sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json', './tsconfig.node.json'],
	},
	rules: {
		'prettier/prettier': 'error',
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
