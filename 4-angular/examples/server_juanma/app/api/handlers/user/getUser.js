var handleOne = require('../').handleOne;
var status = require('http-status');

function getUser (req, res) {

	var query = { path: 'data.cart.product', model: 'Product' };

  if (!req.user) {
    return res.
      status(status.UNAUTHORIZED).
      json({ error: 'Not logged in' });
  }

	res.json({ user: req.user });
  //req.user.populate( query, handleOne.bind(null, 'user', res));

}

module.exports = getUser;