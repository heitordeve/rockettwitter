module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    "standard",
    'prettier'
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    use: true
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'prettier/prettier': 'error',
    'camelcase': 'off',
  }
};
