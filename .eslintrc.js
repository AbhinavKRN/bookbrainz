/* eslint-disable import/unambiguous, import/no-commonjs, no-magic-numbers */
/* eslint-disable no-inline-comments */


const options = {
	env: {
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:flowtype/recommended',
		'plugin:react/recommended',
		'plugin:import/recommended'
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			generators: true,
			jsx: true,
			modules: false
		},
		ecmaVersion: 8,
		sourceType: 'module'
	},
	plugins: [
		'react',
		'import',
		'flowtype',
		'babel'
	]
};


// These should not be removed at all.
const possibleErrorsRules = {
	'for-direction': 2,
	'getter-return': 2,
	'no-await-in-loop': 2,
	'no-console': 1,
	'no-extra-parens': [
		1,
		'all',
		{
			ignoreJSX: 'multi-line',
			nestedBinaryExpressions: false
		}
	],
	'no-prototype-builtins': 2,
	'no-template-curly-in-string': 2,
	'valid-jsdoc': [
		2,
		{
			prefer: {
				return: 'returns'
			},
			requireReturn: false
		}
	]
};

// These should probably not be removed at all.
const bestPracticesRules = {
	'accessor-pairs': 2,
	'array-callback-return': 2,
	'block-scoped-var': 2,
	'class-methods-use-this': 1,
	complexity: 2,
	'consistent-return': 2,
	curly: 2,
	'default-case': 2,
	'dot-location': [
		2,
		'property'
	],
	'dot-notation': 2,
	eqeqeq: [
		2,
		'allow-null'
	],
	'guard-for-in': 1,
	'no-alert': 2,
	'no-caller': 2,
	'no-div-regex': 2,
	'no-else-return': 2,
	'no-empty-function': 2,
	'no-eq-null': 2,
	'no-eval': 2,
	'no-extend-native': 2,
	'no-extra-bind': 2,
	'no-extra-label': 2,
	'no-floating-decimal': 2,
	'no-implicit-coercion': 2,
	'no-implicit-globals': 2,
	'no-implied-eval': 2,
	'no-iterator': 2,
	'no-labels': 2,
	'no-lone-blocks': 2,
	'no-loop-func': 2,
	'no-magic-numbers': [
		1,
		{
			detectObjects: true,
			enforceConst: true,
			ignore: [
				0,
				1,
				2,
				3,
				10
			],
			ignoreArrayIndexes: true
		}
	],
	'no-multi-spaces': 2,
	'no-multi-str': 2,
	'no-new': 2,
	'no-new-func': 2,
	'no-new-wrappers': 2,
	'no-octal-escape': 2,
	'no-param-reassign': 2,
	'no-proto': 2,
	'no-return-assign': 2,
	'no-return-await': 2,
	'no-script-url': 2,
	'no-self-compare': 2,
	'no-sequences': 2,
	'no-throw-literal': 2,
	'no-unmodified-loop-condition': 2,
	'no-unused-expressions': 1,
	'no-useless-call': 2,
	'no-useless-concat': 2,
	'no-useless-return': 2,
	'no-void': 2,
	'no-warning-comments': 1, // keep as 1
	'no-with': 2,
	'prefer-promise-reject-errors': 2,
	radix: 2,
	'require-await': 2,
	'vars-on-top': 2,
	'wrap-iife': [
		2,
		'any'
	],
	yoda: 2
};

const strictModeRules = {
	strict: [
		1,
		'global'
	]
};

const variablesRules = {
	'init-declarations': 0,
	'no-catch-shadow': 0,
	'no-label-var': 2,
	'no-shadow': 2,
	'no-shadow-restricted-names': 2,
	'no-undef-init': 2,
	'no-undefined': 2,
	'no-unused-vars': 1,
	'no-use-before-define': 2
};

const nodeAndCommonJSRules = {
	'callback-return': [
		2,
		[
			'callback',
			'cb',
			'next',
			'done'
		]
	],
	'global-require': 2,
	'handle-callback-err': 2,
	'no-mixed-requires': 2,
	'no-new-require': 2,
	'no-path-concat': 2,
	'no-process-env': 1,
	'no-process-exit': 2,
	'no-sync': 2
};

// Agreement of all project leads needed before changing these.
const stylisticIssuesRules = {
	'array-bracket-newline': [
		2,
		'consistent'
	],
	'array-bracket-spacing': 2,
	'block-spacing': 2,
	'brace-style': [
		2,
		'stroustrup',
		{
			allowSingleLine: true
		}
	],
	camelcase: [
		0,
		{
			properties: 'always'
		}
	],
	'comma-dangle': 2,
	'comma-spacing': 2,
	'comma-style': 2,
	'computed-property-spacing': 2,
	'consistent-this': [
		2,
		'self'
	],
	'eol-last': 2,
	'func-call-spacing': 2,
	'func-name-matching': 1,
	'func-names': 1,
	'func-style': [
		2,
		'declaration'
	],
	'function-paren-newline': [
		1,
		'consistent'
	],
	'id-length': [
		2,
		{
			exceptions: [
				'x',
				'i',
				'_',
				'$',
				'a',
				'b',
				'q'
			]
		}
	],
	indent: [
		2,
		'tab',
		{
			SwitchCase: 1,
			VariableDeclarator: 1
		}
	],
	'jsx-quotes': [
		2,
		'prefer-double'
	],
	'key-spacing': 2,
	'keyword-spacing': 2,
	'linebreak-style': 2,
	'lines-around-comment': [
		2,
		{
			allowBlockStart: true,
			beforeBlockComment: true
		}
	],
	'lines-between-class-members': 1,
	'max-depth': [
		2,
		6
	],
	'max-len': [
		2,
		80,
		4
	],
	'max-lines': 0,
	'max-nested-callbacks': [
		2,
		5
	],
	'max-params': [
		1,
		6
	],
	'max-statements': [
		1,
		50
	],
	'multiline-comment-style': 1,
	'new-parens': 2,
	'no-array-constructor': 2,
	'no-bitwise': 2,
	'no-continue': 2,
	'no-inline-comments': 2,
	'no-lonely-if': 2,
	'no-mixed-spaces-and-tabs': [
		2,
		'smart-tabs'
	],
	'no-multiple-empty-lines': 2,
	'no-nested-ternary': 2,
	'no-new-object': 2,
	'no-trailing-spaces': 2,
	'no-unneeded-ternary': 2,
	'no-whitespace-before-property': 2,
	'object-curly-newline': [
		2,
		{consistent: true}
	],
	'one-var': [
		2,
		'never'
	],
	'operator-assignment': 2,
	'operator-linebreak': [
		2,
		'after'
	],
	'padded-blocks': [
		2,
		'never'
	],
	'quote-props': [
		2,
		'as-needed'
	],
	quotes: [
		2,
		'single',
		'avoid-escape'
	],
	'require-jsdoc': 0,
	'semi-spacing': [
		2,
		{
			after: true,
			before: false
		}
	],
	'sort-keys': 2,
	'sort-vars': 2,
	'space-before-blocks': 2,
	'space-before-function-paren': [
		2,
		{
			named: 'never'
		}
	],
	'space-in-parens': 2,
	'space-infix-ops': 2,
	'space-unary-ops': 2,
	'spaced-comment': 2,
	'unicode-bom': 2,
	'wrap-regex': 2
};

const ecmaScript6Rules = {
	'arrow-body-style': 2,
	'arrow-spacing': 2,
	'generator-star-spacing': [
		2,
		{
			after: true,
			before: false
		}
	],
	'no-confusing-arrow': [
		2,
		{
			allowParens: true
		}
	],
	'no-duplicate-imports': 2,
	'no-useless-computed-key': 2,
	'no-useless-constructor': 2,
	'no-useless-rename': 2,
	'no-var': 2,
	'object-shorthand': 2,
	'prefer-arrow-callback': 2,
	'prefer-const': 2,
	'prefer-destructuring': [
		1,
		{
			array: false,
			object: true
		}
	],
	'prefer-numeric-literals': 2,
	'prefer-template': 2,
	'rest-spread-spacing': 2,
	'sort-imports': 2,
	'template-curly-spacing': 2,
	'yield-star-spacing': 2
};

const babelRules = {
	'babel/new-cap': [
		2,
		{
			capIsNew: false
		}
	],
	'babel/no-invalid-this': 2,
	'babel/object-curly-spacing': 2,
	'babel/semi': 2
};

const flowTypeRules = {
	'flowtype/semi': 2
};

const reactRules = {
	'react/boolean-prop-naming': 2,
	'react/button-has-type': 2,
	'react/default-props-match-prop-types': 2,
	'react/forbid-component-props': 0,
	'react/forbid-foreign-prop-types': 2,
	'react/jsx-boolean-value': 2,
	'react/jsx-closing-bracket-location': [
		2,
		'tag-aligned'
	],
	'react/jsx-closing-tag-location': 2,
	'react/jsx-curly-brace-presence': 2,
	'react/jsx-curly-spacing': [
		2,
		{
			children: true
		}
	],
	'react/jsx-equals-spacing': 1,
	'react/jsx-first-prop-new-line': 2,
	'react/jsx-handler-names': 1,
	'react/jsx-indent-props': [
		2,
		'tab'
	],
	'react/jsx-max-props-per-line': 0,
	'react/jsx-no-bind': [
		1,
		{
			ignoreRefs: true
		}
	],
	'react/jsx-no-literals': 0,
	'react/jsx-one-expression-per-line': 1,
	'react/jsx-pascal-case': 2,
	'react/jsx-sort-props': [
		2,
		{
			callbacksLast: true,
			ignoreCase: false,
			shorthandFirst: true
		}
	],
	'react/jsx-tag-spacing': [
		2,
		{
			beforeSelfClosing: 'never'
		}
	],
	'react/jsx-wrap-multilines': 1,
	'react/no-access-state-in-setstate': 2,
	'react/no-array-index-key': 1,
	'react/no-danger': 1,
	'react/no-did-mount-set-state': 1,
	'react/no-did-update-set-state': 2,
	'react/no-direct-mutation-state': 2,
	'react/no-multi-comp': [
		1,
		{
			ignoreStateless: true
		}
	],
	'react/no-redundant-should-component-update': 2,
	'react/no-set-state': 1,
	'react/no-typos': 1,
	'react/no-unused-prop-types': 1,
	'react/no-unused-state': 1,
	'react/no-will-update-set-state': 2,
	'react/prefer-es6-class': [
		1,
		'always'
	],
	'react/prefer-stateless-function': 1,
	'react/require-default-props': [
		1,
		{
			forbidDefaultForRequired: true
		}
	],
	'react/self-closing-comp': 2,
	'react/sort-comp': 2,
	'react/sort-prop-types': [
		2,
		{
			callbacksLast: false,
			ignoreCase: false,
			requiredFirst: false,
			sortShapeProp: true
		}
	],
	'react/style-prop-object': 2,
	'react/void-dom-elements-no-children': 2
};

const es6ImportRules = {
	'import/first': 2,
	'import/newline-after-import': [
		1,
		{
			count: 2
		}
	],
	'import/no-absolute-path': 2,
	'import/no-amd': 2,
	'import/no-commonjs': 1,
	'import/no-duplicates': 2,
	'import/no-dynamic-require': 1,
	'import/no-extraneous-dependencies': 2,
	'import/no-internal-modules': [
		2,
		{
			allow: [
				'**/src/**',
				'**/lib/**',
				'**/data/**',
				'**/config/**',
				'react-dom/server'
			]
		}
	],
	'import/no-mutable-exports': 2,
	'import/no-named-as-default': 2,
	'import/no-named-as-default-member': 2,
	'import/no-named-default': 2,
	'import/no-nodejs-modules': 0,
	'import/no-unassigned-import': 1
};

options.rules = Object.assign(
	{},
	possibleErrorsRules,
	bestPracticesRules,
	strictModeRules,
	variablesRules,
	nodeAndCommonJSRules,
	stylisticIssuesRules,
	ecmaScript6Rules,
	babelRules,
	flowTypeRules,
	reactRules,
	es6ImportRules
);


module.exports = options;