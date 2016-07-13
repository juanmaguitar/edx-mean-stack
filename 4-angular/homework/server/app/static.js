/* eslint no-console: 0 */

function setupStatic( app, port, development ) {

  const path = require('path');
  const express = require('express');
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../../webpack.config.js');

  // const isDeveloping = process.env.NODE_ENV !== 'production';
  // const port = isDeveloping ? 3000 : process.env.PORT;

  // const app = express();

  const publicFolderPath = __dirname + '/../../public';
  const indexPath =  '../../public/index.html';

  console.log(config.output.publicPath);
  console.log(publicFolderPath);

  if (development) {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
      publicPath: config.output.publicPath,
      contentBase: 'src',
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('*', function response(req, res) {
      console.log ("responding w/ " + path.join(__dirname, indexPath ))
      res.write( middleware.fileSystem.readFileSync(path.join(__dirname, indexPath )) );
      console.log("terminamos conexion!")
      res.end();
    });
  }

  else {
    console.log(publicFolderPath)
    app.use( express.static( publicFolderPath ) );
    // app.get('*', function response(req, res) {
    //   res.sendFile(path.join(__dirname, indexPath ));
    // });
  }

}

module.exports = setupStatic;