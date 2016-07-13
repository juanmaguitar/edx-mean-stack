import angular from 'angular';

import ProductDetailsController from './ProductDetailsController';
import productDetails from './productDetails'

angular.module('productDetails', [] )
	.controller('ProductDetailsController', ProductDetailsController)
	.directive('productDetails', productDetails)

export default 'productDetails';