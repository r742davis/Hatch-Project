import { fixupConfigRules } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/*.css",
        "**/*.scss",
        "**/*.hbs",
        "**/next.config.mjs",
        "**/plopFile.js",
    ],
}, ...fixupConfigRules(compat.extends(
    "next/core-web-vitals",
    "next",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
)), {
    languageOptions: {
        ecmaVersion: 2020,
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },

    settings: {
        "import/resolver": {
            typescript: true,
            node: true,
        },
    },

    rules: {
        "@typescript-eslint/no-unused-vars": 1,
        "@typescript-eslint/no-explicit-any": 1,
        "@typescript-eslint/no-unused-expressions": 1,
        "import/no-relative-packages": "error",
        "import/no-self-import": "error",
        "eslint-plugin-import/default": 0,

        "import/order": ["error", {
            alphabetize: {
                order: "desc",
                caseInsensitive: true,
            },

            warnOnUnassignedImports: true,

            groups: [
                "builtin",
                "external",
                "internal",
                "sibling",
                "parent",
                "index",
                "object",
                "type",
            ],

            pathGroups: [{
                pattern: "react",
                group: "builtin",
                position: "after",
            }, {
                pattern: "next",
                group: "builtin",
                position: "after",
            }, {
                pattern: "next/*",
                group: "builtin",
                position: "after",
            }, {
                pattern: "@/components",
                group: "internal",
                position: "after",
            }],
        }],
    },
}];