const { WebpackPluginServe: Serve } = require('webpack-plugin-serve')
const options = {
	static: __dirname + '/src'
}

module.exports = [{
	entry: [
		__dirname + '/src/index.js',
		'webpack-plugin-serve/client'
	],
	plugins: [
	    new Serve(options)
	],
 	module: {
    	rules: [{ test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules)/ } ]
	},
	watch: true
}, {
	entry: __dirname + '/src/worker.js',
	 module: {
		rules: [{ test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules)/ } ]
	},
	target: 'webworker'
}]
