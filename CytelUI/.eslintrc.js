module.exports = {
    parser: 'babel-eslint',
    env: {
        commonjs: true,
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/prop-types': 0,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    globals: {
        new: true,
        localStorage: true,
        process: true,
        __dirname: true,
        describe: true,
        require: true,
        module: true,
        it: true,
        Promise: true,
        console: true,
    },
}
