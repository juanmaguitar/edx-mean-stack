 function createData( assert, done, PRODUCT_ID, Category, Product, User) {

	var categoriesData = require('./_categories')
 	var productsData = require('./_products')
 	var usersData = require('./_users')

	productsData = JSON.stringify(productsData).replace("<%PRODUCT_ID%>", PRODUCT_ID);
	productsData = JSON.parse(productsData);

	Category.create( categoriesData , function(error) {
	  assert.ifError(error);
	  Product.create( productsData , function(error) {
	    assert.ifError(error);
	    User.create( usersData , function(error) {
	      assert.ifError(error);
	      done();
	    });
	  });
	});

}

module.exports = createData;