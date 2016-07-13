import angular from 'angular';

import CategoryTreeController from './CategoryTreeController';
import categoryTree from './categoryTree'

angular.module('categoryTree', [] )
	.controller('CategoryTreeController', CategoryTreeController)
	.directive('categoryTree', categoryTree)

export default 'categoryTree';