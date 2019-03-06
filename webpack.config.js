
const path = require('path')

// NOTE: https://github.com/shellscape/webpack-plugin-serve/issues/39

module.exports = {
  output: {
    filename: '[name].js'
  },
  entry: {
    'output': path.join(__dirname, 'entry.ts')
  },
  resolve: {
    modules: [ '.', 'node_modules', 'js.packages' ],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
  },
  module: {
    rules: [
      { test: /\.(jsx|tsx|ts|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/ },
      { test: /\.svg$/,
        type: 'javascript/auto',
	//include: [path.resolve('node_modules/icon')],
        //exclude: /node_modules\/(?!icon)/,
        use: [
          { loader: 'babel-loader', options: { ignore: [], exclude: [], include: /.*/ } },
          { loader: path.resolve('./webpack-svg-loader') }
        ]
      }
    ]
  },
  mode: 'development'
}
