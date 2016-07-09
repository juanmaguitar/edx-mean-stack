var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');
var _ = require('underscore');

var createSetUserCartFn = require('./createSetUserCartFn');
var createCheckoutCartFn = require('./createCheckoutCartFn');
var getUser = require('./getUser');

module.exports = function(wagner) {

  var api = express.Router();
  var setUserCart = wagner.invoke( function(User) {
  	return createSetUserCartFn(wagner, User);
 	});
  var checkoutCart = wagner.invoke( function(User, Stripe) {
		return createCheckoutCartFn(wagner, User, Stripe)
	});

  api.use(bodyparser.json());

  api.put('/me/cart', setUserCart );
  api.get('/me', getUser );
  api.post('/checkout', checkoutCart );

  return api;

};

