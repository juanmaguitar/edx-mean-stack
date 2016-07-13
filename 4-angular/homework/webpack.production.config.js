'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

var autoprefixer = require('autoprefixer');
var csswring = require('csswring');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'client/vendor'),
    path.join(__dirname, 'client/app')
  ],
  output: {
    path: path.join(__dirname, '/public/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/templates/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    // new webpack.optimize.CommonsChunkPlugin('vendor', '[name]-[hash].js'),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      compress: {
        drop_console: true
      },
      mangle: false
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["es2015"]
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader?sourceMap')
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader?sourceMap!less?sourceMap')
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
      loader: 'url?limit=100000&name=[name].[ext]'
    }]
  },
  postcss: [autoprefixer, csswring]
};