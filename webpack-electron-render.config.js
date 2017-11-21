const webpack = require('webpack');

module.exports = {
    entry: './src/index.electron-render.js',
    output: {
      filename: 'web-bluetooth-native-electron-render.js'
    },
    plugins: [
      new webpack.ExternalsPlugin('commonjs', [
          'electron'
      ])
    ]
};