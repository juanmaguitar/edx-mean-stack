var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');

var setUserCart = require('./setUserCart');
var getUser = require('./getUser');

module.exports = function(wagner) {

  var api = express.Router();

  api.use(bodyparser.json());

  api.put('/me/cart', setUserCart.bind(null, wagner, status) );
  api.get('/me', getUser.bind(null, status) );

  return api;

};
