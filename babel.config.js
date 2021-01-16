// eslint-disable-next-line
const path = require('path');

const fbtEnumPath = path.join(
  __dirname,
  'src/utils/i18n/fbt/.enum_manifest.json',
);

module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-fbt-runtime',
    '@babel/plugin-syntax-class-properties',
    [
      'babel-plugin-fbt',
      {
        fbtEnumPath,
        extraOptions: {__self: true},
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          apis: './apis',
          assets: './assets',
          navigation: './components/navigation',
          screen: './components/screen',
          shared: './components/shared',
          providers: './providers',
          types: './types',
          utils: './utils',
        },
      },
    ],
  ],
};
