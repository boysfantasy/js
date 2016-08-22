const ExtractTextPlugin = require('extract-text-webpack-plugin')
const helpers = require('./helpers')
const consts = require('./consts')

const config = {
  entry: helpers.getEntry(consts.PAGES),
  output: {
    path: 'dist',
    publicPath: consts.CDN,
    filename: `${consts.SCRIPTS}[name].js`,
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.html$/,
        loader: 'html?-minimize'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192&name=themes/images/[hash].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(`${consts.STYLES}[name].css`),
    ...helpers.getPlugins(consts.PAGES)
  ],
  resolve: {
    root: __dirname,
    modulesDirectories: ['src', consts.THEME, 'node_modules'],
    extensions: ['', '.js', '.html', '.scss']
  }
}

module.exports = config
