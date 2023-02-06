module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["xo", "prettier", "plugin:storybook/recommended", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  overrides: [{
    extends: ["xo-typescript", "prettier"],
    files: ["*.ts", "*.tsx"],
    rules: {
      "no-unused-vars": ["error"],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/no-empty-function": "off",
      "no-implicit-coercion": "off"
    }
  }],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {}
};