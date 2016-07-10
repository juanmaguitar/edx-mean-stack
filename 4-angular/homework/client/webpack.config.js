var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var path = require('path');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: {
		app: [
		  'webpack-dev-server/client?http://127.0.0.1:8080/', // WebpackDevServer host and port
		  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		  './src/app/app.js' // Your appʼs entry point
		],
		vendor: './src/vendor/index.js'
	},
	output: {
		path: '/',
		filename: 'js/[name].[hash].js',
		chunkFilename: 'js/[name].[hash].js',
		publicPath: '/dist/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/templates/index.tpl.html',
			inject: 'body',
			filename: 'index.html',
			hash: true
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['babel?presets[]=es2015']
		}, {
			test: /\.(css|scss)?$/,
			loader: "style!css!sass!postcss"
		}, {
			test: /\.(png|jpg|jpeg|gif)$/,
			loader: 'url?limit=25000'
		}, {
			test: /\.(svg|woff|woff2|ttf|eot)$/,
			loader: 'file?name=[name].[ext]?[hash]'
		}, {
			test: /\.html$/,
			loader: 'raw',
			exclude: /node_modules/
		}]
	},
	postcss: function () {
		return [autoprefixer]
	},
	devServer : {
		// contentBase: './src/',
		// stats: 'minimal',
		hot: true,
		proxy: {
				'*': 'http://localhost:3000'
		}
	}
}
