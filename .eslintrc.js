module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    // sort
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': [
      'error',
      {
        groups: [
          ['^\\u0000'], // bare imports
          ['^react'], // react
          ['^[^\\.]'], // non-local imports
          ['^\\.'], // local imports
        ],
      },
    ],
  },
};
