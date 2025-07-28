module.exports = {
    env: {
        node: true,
        es2021: true,
        jest: true
    },
    extends: ['eslint:recommended'],
    rules: {
        'no-unused-vars': 'error',
        'no-console': 'warn'
    }
};