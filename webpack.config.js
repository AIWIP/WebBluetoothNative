const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'web-bluetooth-native.js'
    },
    plugins: [
      new webpack.ExternalsPlugin('commonjs', [
          'electron'
      ])
    ]
};