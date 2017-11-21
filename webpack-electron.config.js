const webpack = require('webpack');

module.exports = {
    entry: './src/index.electron.js',
    output: {
      filename: 'build/electron/index.js'
    },
    plugins: [
      new webpack.ExternalsPlugin('commonjs', [
          'electron'
      ])
    ]
};