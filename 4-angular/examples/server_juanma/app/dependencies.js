var path = require('path');
var fs = require('fs');
var fx = require('./models/helpers/fx');
var Stripe = require('stripe');
const configPath = path.join(__dirname, 'config.json')

module.exports = function(wagner) {

	wagner.factory('Stripe', function(Config) {
		return Stripe(Config.stripeKey)
	});

	wagner.factory('fx', fx );

	wagner.factory('Config', function() {
		return JSON.parse(fs.readFileSync(configPath).toString());
	});
};
