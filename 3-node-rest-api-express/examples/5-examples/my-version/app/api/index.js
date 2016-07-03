var express = require('express');
var status = require('http-status');

var status = require('http-status');

var getCategory = require('./getCategory.js');
var getParentCategory = require('./getParentCategory.js');

module.exports = function(wagner) {

  var api = express.Router();

  api.get('/category/id/:id', getCategory.bind(null, wagner) );
  api.get('/category/parent/:id', getParentCategory.bind(null, wagner) );

  return api;

};
