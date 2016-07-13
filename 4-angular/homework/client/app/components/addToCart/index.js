import angular from 'angular';

import AddToCartController from './AddToCartController';
import addToCart from './addToCart'

import services from '../../services';

angular.module('addToCart', [ services ] )
	.controller('AddToCartController', AddToCartController)
	.directive('addToCart', addToCart)

export default 'addToCart';