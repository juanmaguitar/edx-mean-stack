var path = require('path');
var fs = require('fs');
var fx = require('./helpers/fx');
var Stripe = require('stripe');
const configPath = path.join(__dirname, 'config.json')

module.exports = function(wagner) {

	console.log("@Stripe factory...")
	wagner.factory('Stripe', function(Config) {
		return Stripe(Config.stripeKey)
	});

	console.log("@fx factory...")
	wagner.factory('fx', fx );

console.log("@Config factory...")
   wagner.factory('Config', function() {
    return JSON.parse(fs.readFileSync(configPath).toString());
  });
};
