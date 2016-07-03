var handleResults = require('./handlers.js').handleResults
var handleError = require('./handlers.js').handleError

function getCategory(wagner, req, res) {

  const query = { _id: req.params.id };

  return wagner.invoke( function(Category) {
    Category.findOne(query)
      .then( handleResults.bind(null, 'category', res) )
      .catch( handleError.bind(null, res) )
  })

}

module.exports = getCategory;