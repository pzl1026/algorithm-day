// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // "parser": "vue-eslint-parser",
  "env": {
    "browser": true,
    "es2020": true,
    node: true,
  },
  "extends": [
    "eslint:recommended",
    // "plugin:vue/essential"
  ],
  "parserOptions": {
    parser: 'babel-eslint',
    jsx: true,
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  // plugins: ['vue'],
  rules: {
    "vue/valid-v-model": "off",
    "no-useless-escape": "off",
    "vue/no-unused-vars": "off",
    "vue/no-unused-components": "off",
    "vue/no-v-model-argument": "off",
    "vue/no-multiple-template-root": "off",
    "no-unused-vars": "off",
    "prefer-promise-reject-errors": "off",
    "no-redeclare": "off",
    "padded-blocks": ["error", "never"],
    "arrow-spacing": ["error", {"before": true, "after": true}],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "always"],
    "semi": ["error", "always"],
    "newline-after-var": ["error", "always"],
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "space-infix-ops": "error",
    "key-spacing": ["error", {"beforeColon": false}],
    "object-curly-spacing": ["error", "never"],
    "indent": ["error", 2, {"SwitchCase": 1}],
    "no-spaced-func": "error",
    "generator-star-spacing": "off",
    'eqeqeq': 'off',
    'camelcase': 'off',
    'eol-last': ['error', 'never'],
    'no-undef': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};