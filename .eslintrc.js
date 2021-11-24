module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
    ],
    "rules": {
        semi: [2, "always"],
        "no-unused-vars": "off",
        "indent": ["error", 4],
        "space-before-function-paren": ["error", "always"],
    }
};
