/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    jest: true,
  },
  rules: {
    "vue/multi-word-component-names": 0,
  },
}
