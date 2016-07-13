function CheckoutController($scope, $user, $http) {
  // For update cart
  $scope.user = $user;

  $scope.updateCart = function() {
    $http.
      put('/api/v1/me/cart', $user.user).
      success(function(data) {
        $scope.updated = true;
      });
  };

  // For checkout
  Stripe.setPublishableKey('pk_test_HQ9g8Srh4U1JvdJ6qRXNPVwm');

  $scope.stripeToken = {
    number: '4242424242424242',
    cvc: '123',
    exp_month: '12',
    exp_year: '2016'
  };

  $scope.checkout = function() {
    $scope.error = null;
    Stripe.card.createToken($scope.stripeToken, function(status, response) {
      if (status.error) {
        $scope.error = status.error;
        return;
      }

      $http.
        post('/api/v1/checkout', { stripeToken: response.id }).
        success(function(data) {
          $scope.checkedOut = true;
          $user.user.data.cart = [];
        });
    });
  };
};

CheckoutController.$inject = [ '$scope', '$routeParams', '$http' ];

export default CheckoutController;