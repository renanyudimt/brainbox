module.exports = {
  root: true,
  extends: [
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    `plugin:import/recommended`,
    `plugin:import/typescript`,
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    `plugin:@tanstack/eslint-plugin-query/recommended`,
  ],
  plugins: ["unicorn", "prefer-arrow-functions", "react-refresh"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  node: true,
  rules: {
    // Offs
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-require-imports": "off",
    "no-undef": "off",
    "react/display-name": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",
    "import/no-default-export": "off",

    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // TanStack Query
    "@tanstack/query/exhaustive-deps": "warn",
    "@tanstack/query/prefer-query-object-syntax": "warn",

    // Unicorn
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/explicit-length-check": "error",
    "unicorn/consistent-function-scoping": "error",
    "unicorn/consistent-destructuring": "error",
    "unicorn/no-empty-file": "error",
    "unicorn/no-for-loop": "error",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-invalid-remove-event-listener": "error",
    "unicorn/no-lonely-if": "error",
    "unicorn/no-new-array": "error",
    "unicorn/no-unused-properties": "error",
    "unicorn/no-useless-fallback-in-spread": "error",
    "unicorn/no-useless-length-check": "error",
    "unicorn/no-useless-spread": "error",
    "unicorn/no-nested-ternary": "error",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-array-find": "error",
    "unicorn/prefer-array-flat": "error",
    "unicorn/prefer-array-flat-map": "error",
    "unicorn/prefer-array-index-of": "error",
    "unicorn/prefer-array-some": "error",
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-ternary": "error",
    "unicorn/no-nested-ternary": "error",
    "unicorn/no-unnecessary-await": "error",

    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",

    //React
    "react/prefer-stateless-function": "error",
    "react/button-has-type": "error",
    "react/no-unused-prop-types": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-no-script-url": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    "react/jsx-fragments": "error",
    "react/destructuring-assignment": [
      "error",
      "always",
      { destructureInSignature: "always" },
    ],
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
    "react/jsx-max-depth": ["error", { max: 6 }],
    "react/function-component-definition": [
      "warn",
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/no-typos": "warn",
    "react/self-closing-comp": "warn",
    "react/jsx-sort-props": "warn",

    //Typescript
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "default",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "variable",
        // Specify PascalCase for React components
        format: ["PascalCase", "camelCase", "UPPER_CASE", "snake_case"],
        leadingUnderscore: "allow",
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: null,
        leadingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],

    "prefer-arrow-functions/prefer-arrow-functions": [
      "warn",
      {
        classPropertiesAllowed: true,
        disallowPrototype: true,
        returnStyle: "unchanged",
      },
    ],
    "arrow-body-style": "warn",
    "prefer-arrow-callback": [
      "warn",
      {
        allowNamedFunctions: true,
      },
    ],
  },
};
