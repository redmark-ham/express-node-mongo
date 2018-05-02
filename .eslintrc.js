module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "no-unused-vars" : ["error", { "vars": "local", "args" : "none" }],
        "import/newline-after-import": ["warn", { "count": 1 }],
        "object-curly-spacing": ["warn", "always"],
        "indent": ["warn", 2],
        "comma-dangle": ["error", "only-multiline"],
        "consistent-return": ["off"],
        "func-names": ["error", "never"],
        "global-require": ["off"],
        "max-len": ["off"],
        "no-console": ["off"],
        "no-param-reassign": ["error", {
        "props": false
        }],
        "no-underscore-dangle": ["off"],
        "prefer-arrow-callback": ["off", {
        "allowNamedFunctions": true,
        "allowUnboundThis": true
        }],
        "prefer-destructuring": ["off"],
        "space-before-function-paren": ["off"]
    }
};