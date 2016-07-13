# webpack-express-boilerplate

A boilerplate for running a Webpack workflow in Node express based on https://github.com/christianalfoni/webpack-express-boilerplate

Please read the following article: [The ultimate Webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup) to know more about this boilerplate.

## Install and Running

`git clone https://github.com/juanmaguitar/webpack-express-boilerplate.git`

1. cd webpack-express-boilerplate
2. npm install
3. npm run server
4. navigate to http://localhost:3000 in your browser of choice.

## Tasks

### `npm start`

Launch server in production mode (serving static files at public)

### `npm run server`

Launch server in development mode (serving hot files from webpack web-server proxied)

### `npm run build`

Create minified version of client app at `public` folder ready to be served 

## Overview

### Babel and Linting
Both Node server and frontend code runs with Babel. And all of it is linted. With atom you install the `linter` package, then `linter-eslint` and `linter-jscs`. You are covered. Also run `npm run eslint` or `npm run jscs` to verify all files. I would recommend installing `language-babel` package too for syntax highlighting

### Beautify
With a beautify package installed in your editor it will also do that
