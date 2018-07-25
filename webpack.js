const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

module.exports = {
  node: {
    __dirname: true,
    __filename: true,
    fs: 'empty',
    // net: 'empty // <-- Uncomment to fix
  },
  resolve: {
    plugins: [
      new DirectoryNamedWebpackPlugin()
    ]
  },

}
