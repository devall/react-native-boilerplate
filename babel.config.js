module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: './__tests__',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@components': './src/components',
          '@store': './src/store',
          '@utils': './src/utils',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
