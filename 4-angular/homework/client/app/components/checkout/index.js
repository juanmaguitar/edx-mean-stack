import angular from 'angular';

import CheckoutController from './CheckoutController';
import checkout from './checkout'

import services from '../../services';

angular.module('checkout', [ services ] )
	.controller('CheckoutController', CheckoutController)
	.directive('checkout', checkout)

export default 'checkout';