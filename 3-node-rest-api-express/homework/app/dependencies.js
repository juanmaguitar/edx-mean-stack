var path = require('path');
var fs = require('fs');
var fx = require('./helpers/fx');
var Stripe = require('stripe');

module.exports = function(wagner) {

	const configPath = path.join(__dirname, 'config.json')
  wagner.factory('Config', () => JSON.parse( fs.readFileSync(configPath).toString() ) );

  // wagner.invoke( function(Config) {
  // 	console.log("invoked!!")
  // 	console.log(Config)
  // })

// console.log("aa");
// var aa = wagner.invoke( function(Config) { return Config.stripeKey } )
// console.log(aa);

	// wagner.invoke( function(Config) {
	// 	return console.log (Config);
	// });

	wagner.factory('Stripe',  wagner.invoke( function(Config) {
		console.log(Config);
		console.log(Config.stripeKey);
		return Stripe( Config.stripeKey )
	}));

	wagner.factory('fx', fx);

};
