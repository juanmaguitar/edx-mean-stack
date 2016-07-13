import angular from 'angular';

import NavBarController from './NavBarController';
import navBar from './navBar'

import services from '../../services';

angular.module('navBar', [services])
	.controller('NavBarController', NavBarController)
	.directive('navBar', navBar)

export default 'navBar';