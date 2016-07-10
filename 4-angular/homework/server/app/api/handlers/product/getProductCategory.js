var handleMany = require('../').handleMany;

function getProductCategory (Product, req, res) {

  var sort = { name: 1 };

  if (req.query.price === "1") {
    sort = { 'internal.approximatePriceUSD': 1 };
  }
  else if (req.query.price === "-1") {
    sort = { 'internal.approximatePriceUSD': -1 };
  }

  Product.
    find({ 'category.ancestors': req.params.id }).
    sort(sort).
    exec(handleMany.bind(null, 'products', res));

}

module.exports = getProductCategory;