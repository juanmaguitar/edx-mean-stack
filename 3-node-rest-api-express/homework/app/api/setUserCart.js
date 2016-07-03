var handleOne = require('./handlers').handleOne;

function setUserCart (wagner, status, req, res) {

  return wagner.invoke( function(User) {

  	try {
        var cart = req.body.data.cart;
      } catch(e) {
        return res.
          status(status.BAD_REQUEST).
          json({ error: 'No cart specified!' });
      }

  	req.user.data.cart = cart;
    req.user.save( handleOne.bind(null, 'user', res) )

	})

}

module.exports = setUserCart;