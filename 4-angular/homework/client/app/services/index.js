import angular from 'angular';
import userService from './userService';

angular.module('mean-retail.services',[])
	.factory('$user', userService)

export default 'mean-retail.services';