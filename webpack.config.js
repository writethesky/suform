var path = require('path');
//const webpack = require('webpack');


module.exports = {
	entry: {
		// vendor: [ 'moment' ],
		//app: './src/index.js',
		eg: './example/webpack-import/eindex.js',
	},

	devServer: {
		compress: true,
		port: 8000
	}
};