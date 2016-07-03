var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = function(wagner) {

  mongoose.connect('mongodb://localhost:27017/test');

  var Category =
    mongoose.model('Category', require('../schemas/category'), 'categories');

  wagner.factory('Category', () => Category );

  // for testing purposes
  return { Category };
};
