'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var autoprefixer = require('autoprefixer');
var csswring = require('csswring');


module.exports = {
  devtool: 'eval-source-map',
  entry: [
    // Webpack comes with client code to check & reload modules
    'webpack/hot/dev-server',
    // We need to add our own code to receive module change notifications
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    path.join(__dirname, 'client/vendor'),
    path.join(__dirname, 'client/app')
  ],
  output: {
    path: path.join(__dirname, '/public/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/templates/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  postcss: [autoprefixer],
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
    },
    {
      test: /\.css$/,
      loader: 'style!css!postcss'
    },
    {
        test: /\.html$/,
        loader: 'html-loader'
    },
    {
      test: /\.less$/,
      loader: 'style!css!postcss!less'
    },
    {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
      loader: 'url?limit=100000&name=[name].[ext]'
    }
    ]
  }
};
