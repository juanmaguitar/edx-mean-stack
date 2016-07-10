var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');
var _ = require('underscore');

/* Category handlers */
var getCategory = require('./handlers/category/getCategory');
var getParentCategory = require('./handlers/category/getParentCategory');

/* Product handlers */
var getProduct = require('./handlers/product/getProduct');
var getProductCategory = require('./handlers/product/getProductCategory');

/* User handlers */
var setUserCart = require('./handlers/user/setUserCart');
var checkoutCart = require('./handlers/user/checkoutCart');
var getUser = require('./handlers/user/getUser');

module.exports = function(wagner) {

  var api = express.Router();

  api.use(bodyparser.json());

  /* Category API */
  api.get('/category/id/:id', wagner.invoke(function(Category) {
    return getCategory.bind(null, Category);
  }) )
  api.get('/category/parent/:id', wagner.invoke(function(Category) {
    return getParentCategory.bind(null, Category);
  }) )

  /* Product API */
  api.get('/product/id/:id', wagner.invoke(function(Product) {
    return getProduct.bind(null, Product);
  }) )
  api.get('/product/category/:id', wagner.invoke(function(Product) {
    return getProductCategory.bind(null, Product);
  }) )

  /* User API */
  api.get('/me', getUser );
  api.put('/me/cart', wagner.invoke( function(User) {
    return setUserCart.bind(null, User);
  }) );
  api.post('/checkout', wagner.invoke( function(User, Stripe) {
    return checkoutCart.bind(null, User, Stripe);
  }) );



  return api;

};

