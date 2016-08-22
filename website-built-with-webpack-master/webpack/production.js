const config = require('./utils/config')
const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

module.exports = {
  entry: config.entry,
  output: config.output,
  module: {
    loaders: config.module.loaders
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.NoErrorsPlugin(),
    ...config.plugins
  ],
  resolve: config.resolve
}
