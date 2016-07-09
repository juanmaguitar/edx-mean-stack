var handleOne = require('./handlers').handleOne;
var status = require('http-status');
var _ = require('underscore');

function checkoutCart (User, Stripe, req, res) {

	if (!req.user) {
		return res.
			status(status.UNAUTHORIZED).
			json({ error: 'Not logged in' });
	}

	// Populate the products in the user's cart
	const configPopulate = { path: 'data.cart.product', model: 'Product' };
	req.user.populate( configPopulate, function(error, user) {

		// Sum up the total price in USD
		var totalCostUSD = 0;
		_.each(user.data.cart, function(item) {
			totalCostUSD += item.product.internal.approximatePriceUSD *
				item.quantity;
		});

		// And create a charge in Stripe corresponding to the price
		Stripe.charges.create(
			{
				// Stripe wants price in cents, so multiply by 100 and round up
				amount: Math.ceil(totalCostUSD * 100),
				currency: 'usd',
				source: req.body.stripeToken,
				description: 'Example charge'
			},
			function(err, charge) {
				if (err && err.type === 'StripeCardError') {
					return res.
						status(status.BAD_REQUEST).
						json({ error: err.toString() });
				}
				if (err) {
					console.log(err);
					return res.
						status(status.INTERNAL_SERVER_ERROR).
						json({ error: err.toString() });
				}

				req.user.data.cart = [];
				req.user.save(function() {
					// Ignore any errors - if we failed to empty the user's
					// cart, that's not necessarily a failure

					// If successful, return the charge id
					return res.json({ id: charge.id });
				});
			}
		);
	})

}

module.exports = checkoutCart;