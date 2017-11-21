const webpack = require('webpack');

module.exports = {
    entry: './src/index.electron.js',
    output: {
      filename: 'web-bluetooth-native.js'
    },
    plugins: [
      new webpack.IgnorePlugin(/electron/)
    ]
};