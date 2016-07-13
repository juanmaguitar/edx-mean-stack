import angular from 'angular';

import CategoryProductsController from './CategoryProductsController';
import categoryProducts from './categoryProducts'

angular.module('categoryProducts', [] )
	.controller('CategoryProductsController', CategoryProductsController)
	.directive('categoryProducts', categoryProducts)

export default 'categoryProducts';