var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/test');

// Parameters are:  model name  | schema  | collection name
var User = mongoose.model('User', schema, 'users');

var user = new User({
  name: 'John Smith',
  email: 'john@smith.io'
});

user.save()
  .then( findUser )
  .then( displayUser )
  .catch( handleError )

function findUser() {
	return User.find({ email: 'john@smith.io' })
}

function displayUser(docs) {
	console.log(require('util').inspect(docs));
	process.exit(0);
}

function handleError(error) {
	console.log ("Something bad heppened!");
	console.log (error);
	process.exit(0);
}