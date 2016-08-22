const HtmlWebpackPlugin = require('html-webpack-plugin')
const consts = require('./consts')

const getEntry = (pages) => {
  const entry = {}
  const items = ['public', ...pages]

  items.map((item) => {
    entry[item] = `./${consts.SRC}${consts.SCRIPTS}${item}.js`
  })

  return entry
}

const getPlugins = (pages) => {
  const plugins = []

  pages.map((item) => {
    plugins.push(
      new HtmlWebpackPlugin({
        filename: `./${item}.html`,
        template: `./${item}.html`,
        inject: false
      })
    )
  })

  return plugins
}

module.exports = {
  getEntry,
  getPlugins
}
