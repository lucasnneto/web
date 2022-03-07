module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "prettier",
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    camelcase: ["off"],
    "no-use-before-define": "off",
    "vue/multi-word-component-names": 0,
  },
};
