const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config')
const webpack = require('webpack')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'vue-style-loader!css-loader'
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devtool: 'cheap-source-map',
  devServer: {
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})





