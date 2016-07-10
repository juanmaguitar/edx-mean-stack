var express = require('express');
var wagner = require('wagner-core');

require('./models')(wagner);
require('./dependencies')(wagner);

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, '/../../client/dist');

wagner.invoke(require('./auth'), { app: app });

app.use('/api/v1', require('./api')(wagner));

app.use( express.static(publicPath, { maxage: '2h' }) );

app.listen(3000);
console.log('Listening on port 3000!');
