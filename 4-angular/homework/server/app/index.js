var express = require('express');
var wagner = require('wagner-core');

require('./models')(wagner);
require('./dependencies')(wagner);

var app = express();
var router = express.Router()

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

wagner.invoke(require('./auth'), { app: app });

app.use('/api/v1', require('./api')(wagner));


  // app.listen(port, '0.0.0.0', function onStart(err) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
  // });

require('./static')(app, port, isDeveloping)

app.listen(port, 'localhost', function(err) {

  if (err) {
    console.log(err);
    return;
  }

  console.log('🌎 Listening at http://localhost:'+port);
});
