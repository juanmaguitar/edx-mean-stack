function handleError(res, error) {
  return res.status( status.INTERNAL_SERVER_ERROR )
               .json( { error: error.toString() } );
}

function handleResults(property, res, results) {

  if(!results) {
      res.status(status.NOT_FOUND)
            .json({ error: 'Not found' });
  }

  var json = {};
  json[property] = results;
  res.json(json)

}

module.exports.handleError = handleError;
module.exports.handleResults = handleResults;