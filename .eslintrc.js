module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    indent: [
      2,
    ],
    'no-var': 2,
    'prefer-const': 0,
    'linebreak-style': [
      0,
      'error',
      'windows',
    ],
    'no-console': 0,
    "max-len": [0, 180, 4],//字符串最大长度
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
