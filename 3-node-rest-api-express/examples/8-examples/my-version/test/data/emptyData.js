// Make sure categories are empty before each test
function emptyData( assert, done, Category, Product, User) {

	Category.remove({}, function(error) {
	  assert.ifError(error);
	  Product.remove({}, function(error) {
	    assert.ifError(error);
	    User.remove({}, function(error) {
	      assert.ifError(error);
	      done();
	    });
	  });
	});
}

module.exports = emptyData;