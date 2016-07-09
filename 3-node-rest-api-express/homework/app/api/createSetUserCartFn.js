var handleOne = require('./handlers').handleOne;
var status = require('http-status');

function createSetUserCartFn (wagner, User) {

  return function(req, res) {

  	try {
        var cart = req.body.data.cart;
      } catch(e) {
        return res.
          status(status.BAD_REQUEST).
          json({ error: 'No cart specified!' });
      }

    console.log (cart);
  	req.user.data.cart = cart;
    req.user.save( handleOne.bind(null, 'user', res) )

	}

}

module.exports = createSetUserCartFn;