var status = require('http-status');

function getParentCategory (Category, req, res) {

  Category.
    find({ parent: req.params.id }).
    sort({ _id: 1 }).
    exec(function(error, categories) {
      if (error) {
        return res.
          status(status.INTERNAL_SERVER_ERROR).
          json({ error: error.toString() });
      }
      res.json({ categories: categories });
    });

}

module.exports = getParentCategory;