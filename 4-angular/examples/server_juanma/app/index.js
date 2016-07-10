var express = require('express');
var wagner = require('wagner-core');

require('./models')(wagner);
require('./dependencies')(wagner);

var app = express();

wagner.invoke(require('./auth'), { app: app });

app.use('/api/v1', require('./api')(wagner));

{
	let staticPath = __dirname + '/../../';
	app.use( express.static(staticPath, {
		maxage: '2h'
	}));
}

app.listen(3000);
console.log('Listening on port 3000!');
