import angular from 'angular';
import ngRoute from 'angular-route';

// CSS Loading
import 'font-awesome/css/font-awesome.css';
import '../css/app.css';

import templateCategory from '../templates/category_view.html';

import components from './components';

angular.module('mean-retail', [ components, 'ngRoute' ])
  .config(function($routeProvider) {
    $routeProvider.
      when('/category/:category', {
        template: templateCategory
      }).
      when('/checkout', {
        template: '<checkout></checkout>'
      }).
      when('/product/:id', {
        template: '<product-details></product-details>'
      });
  });
