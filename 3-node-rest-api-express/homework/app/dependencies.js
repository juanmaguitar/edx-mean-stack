var path = require('path');
var fs = require('fs');
var fx = require('./helpers/fx');
var Stripe = require('stripe');

module.exports = function(wagner) {

	const configPath = path.join(__dirname, 'config.json')
  wagner.factory('Config', () => JSON.parse( fs.readFileSync(configPath).toString() ) );

	wagner.factory('Stripe',  wagner.invoke( function(Config) {
		return function () {
			return Stripe( Config.stripeKey );
		}
	}));

	wagner.factory('fx', fx.bind(null,wagner) );

};
