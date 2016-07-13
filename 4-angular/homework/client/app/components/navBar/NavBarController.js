function NavBarController($scope, $user) {
  $scope.user = $user;

  setTimeout(function() {
    $scope.$emit('NavBarController');
  }, 0);
};

NavBarController.$inject = [ '$scope', '$user' ];

export default NavBarController;