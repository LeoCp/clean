module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx', '.ts'],
        alias: {
          '@domain': './src/domain',
          '@routes': './src/routes',
          '@assets': './src/assets',
          '@util': './src/util',
          '@components': './src/components',
          '@theme': './src/theme',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
