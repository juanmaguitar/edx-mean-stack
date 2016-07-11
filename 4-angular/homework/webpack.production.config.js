'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

var autoprefixer = require('autoprefixer');
var csswring = require('csswring');

module.exports = {
  // entry: {
  //   vendor: path.join(__dirname, 'client/src/vendor'),
  //   app: path.join(__dirname, 'client/src/app')
  // },
  entry : [
    path.join(__dirname, 'client/src/vendor'),
    path.join(__dirname, 'client/src/app')
  ],
  output: {
    path: path.join(__dirname, '/public/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/src/templates/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
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
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader?sourceMap')
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader?sourceMap!less?sourceMap')
      }
    ]
  },
  postcss: [autoprefixer, csswring]
};