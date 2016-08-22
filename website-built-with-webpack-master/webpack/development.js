const config = require('./utils/config')
const webpack = require('webpack')

module.exports = {
  entry: config.entry,
  output: config.output,
  module: {
    loaders: config.module.loaders
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...config.plugins
  ],
  resolve: config.resolve
}
