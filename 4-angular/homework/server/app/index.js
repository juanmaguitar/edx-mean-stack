function setupApi ( app ) {

  var express = require('express');
  var wagner = require('wagner-core');

  require('./models')(wagner);
  require('./dependencies')(wagner);

  var router = express.Router()

  wagner.invoke(require('./auth'), { app: app });

  app.use('/api/v1', require('./api')(wagner));

}

module.exports = setupApi