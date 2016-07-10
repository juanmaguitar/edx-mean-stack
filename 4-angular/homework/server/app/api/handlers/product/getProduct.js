var handleOne = require('../').handleOne;

function getProduct (Product, req, res) {

  Product.findOne({ _id: req.params.id },
  	handleOne.bind(null, 'product', res));

}

module.exports = getProduct;