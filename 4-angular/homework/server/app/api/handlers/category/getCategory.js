var status = require('http-status');

function getCategory (Category, req, res) {

  Category.findOne({ _id: req.params.id }, function(error, category) {
    if (error) {
      return res.
        status(status.INTERNAL_SERVER_ERROR).
        json({ error: error.toString() });
    }
    if (!category) {
      return res.
        status(status.NOT_FOUND).
        json({ error: 'Not found' });
    }
    res.json({ category: category });
  });

}

module.exports = getCategory;