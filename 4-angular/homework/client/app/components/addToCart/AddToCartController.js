function AddToCartController($scope, $http, $user, $timeout) {

  $scope.addToCart = function(product) {

    var obj = { product: product, quantity: 1 };
    $user.user.data.cart.push(obj);

    $http.
      put('/api/v1/me/cart', { data: { cart: $user.user.data.cart } }).
      success(function(data) {
        $user.loadUser();
        $scope.success = true;

        $timeout(function() {
          $scope.success = false;
        }, 5000);
      });
  };
};

AddToCartController.$inject = [ '$scope', '$http', '$user', '$timeout' ];

export default AddToCartController;