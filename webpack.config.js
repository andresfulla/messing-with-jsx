const path = require('path')

module.exports = {
  entry: {
    index: './index.js',
    polyfills: './h.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ]
  },
  mode: 'development',
}