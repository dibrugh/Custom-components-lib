module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:jsx-a11y/recommended",
        "plugin:eslint-comments/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        /* Allows usage of imports */
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        "@typescript-eslint/no-unused-vars": ["error"],
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
