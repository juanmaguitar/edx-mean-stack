var handleResults = require('./handlers.js').handleResults
var handleError = require('./handlers.js').handleError

function getParentCategory(wagner, req, res) {

    const query = { parent: req.params.id };
    const sort = { _id: 1 };

    return wagner.invoke( function(Category) {
      Category.find( query )
        .sort( sort )
        .exec()
        .then( handleResults.bind(null, 'categories', res) )
        .then( null, handleError.bind(null,res) )
    })

  };

module.exports = getParentCategory