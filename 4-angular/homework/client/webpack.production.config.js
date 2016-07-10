var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: {
		app: './src/app/app.js',
    vendor: './src/vendor/index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/[name].bundle.js',
		chunkFilename: 'js/[name].bundle.js',
		publicPath: ''
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/templates/index.tpl.html',
			inject: 'body',
			filename: 'index.html',
			hash: true
		}),
		new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'),
    new CopyWebpackPlugin( [
        { from: path.resolve(__dirname, './src/data'), to: 'data' },
        { from: path.resolve(__dirname, './src/img'), to: 'img' }
      ],
      { ignore: ['*.html'] }
    ),
		new webpack.optimize.OccurenceOrderPlugin(),
		new ExtractTextPlugin('css/styles-[hash].css', { allChunks: true })
	],
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['babel?presets[]=es2015']
		}, {
			test: /\.(css|scss)?$/,
			loader: ExtractTextPlugin.extract("style", "!css!sass!postcss")
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
	}
}
