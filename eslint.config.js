import globals from 'globals'
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */

export default [
	{ ignores: ['dist'] },
	js.configs.recommended,
	react.configs.flat.recommended,
	importPlugin.flatConfigs.recommended,
	jsxA11y.flatConfigs.recommended,
	prettier,
	{
		files: ['**/*.{js,jsx}'],

		// use predefined configs in installed eslint plugins
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		},
		// specify used plugins
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'unused-imports': unusedImports
		},
		settings: {
			// for eslint-plugin-react to auto detect react version
			react: {
				version: 'detect'
			}
		},
		rules: {
			// set of custom rules
			'no-console': 'warn',
			'react/button-has-type': 'error',
			'react/react-in-jsx-scope': ['off'],
			'no-unused-vars': 'off',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_'
				}
			],
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
		}
	}
]
