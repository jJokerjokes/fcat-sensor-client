module.exports = {
    extends: 'react-app',
    rules: {
        // Include client-specific rules here
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'space-infix-ops': 'error',
        'keyword-spacing': ['error', { after: true }],
        'func-call-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'function-paren-newline': ['error', 'multiline'],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-trailing-spaces': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'no-undef': 'warn',
        'no-prototype-builtins': 'warn',
        'no-useless-escape': 'warn',
        'no-constant-condition': 'warn',
        'no-empty': 'warn',
        'no-irregular-whitespace': 'error',
        'no-unreachable': 'warn',
        'no-unexpected-multiline': 'warn',
        'no-extra-semi': 'warn',
        'no-extra-parens': 'warn',
        'no-extra-boolean-cast': 'warn',
        'arrow-body-style': ['error'],
        'arrow-parens': ['error'],
        'arrow-spacing': ['error', { before: true, after: true }],
        'no-confusing-arrow': ['error', { allowParens: true }],
        'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
        'prefer-const': ['error', { destructuring: 'all' }],
        //jsx
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
        'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
        'react/jsx-no-undef': ['error', { allowGlobals: true }],
        'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': ['error', { declaration: true, assignment: true, return: true }],
        'react/no-deprecated': 'error',

    },
};