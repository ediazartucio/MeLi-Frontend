module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "mocha": true,
        "node": true,
    },
    "globals": {
        "Buffer": false,
        "process": false,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
    },
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            { "max": 1 }
        ],
        "no-undef": "error",
        "no-debugger": "error",
        "no-console": "warn",
        "no-alert": "error",
        "no-var": "error",
        "no-array-constructor": "error",
        "no-trailing-spaces": "error",
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "arrow-spacing": [
            "error",
            { "before": true, "after": true }
        ],
        "space-before-blocks": [
            "error", {
                "functions": "always",
                "keywords": "always",
                "classes": "always"
            }
        ],
        "key-spacing": ["error", {
            "beforeColon": false,
            "afterColon": true,
            "mode": "strict"
        }],
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "ignore"
        }]
    }
};