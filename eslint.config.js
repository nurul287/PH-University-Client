import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "import/no-duplicates": 1,
      "no-extra-boolean-cast": 1,
      "react/self-closing-comp": 1,
      "@typescript-eslint/no-shadow": 0,
      "import/no-useless-path-segments": 1,
      "import/no-extraneous-dependencies": 0,
      "@typescript-eslint/naming-convention": 0,
      "object-curly-spacing": [1, "always"],
      "@typescript-eslint/no-unused-vars": [
        1,
        {
          vars: "all",
          args: "none",
        },
      ],
      "prefer-destructuring": [
        1,
        {
          object: true,
          array: false,
        },
      ],
    },
  }
);
