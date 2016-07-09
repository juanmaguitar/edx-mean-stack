var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');
var _ = require('underscore');

var setUserCart = require('./setUserCart');
var checkoutCart = require('./checkoutCart');
var getUser = require('./getUser');

module.exports = function(wagner) {

  var api = express.Router();

  api.use(bodyparser.json());

  api.get('/me', getUser );
  api.put('/me/cart', wagner.invoke( function(User) {
    return setUserCart.bind(null, User);
  }) );
  api.post('/checkout', wagner.invoke( function(User, Stripe) {
    return checkoutCart.bind(null, User, Stripe);
  }) );

  return api;

};

