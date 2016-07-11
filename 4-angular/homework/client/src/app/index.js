var controllers = require('./controllers');
var directives = require('./directives');
var services = require('./services');
var _ = require('underscore');

//import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css';

import angular from 'angular';
import ngRoute from 'angular-route';
import 'angular-stripe';

console.log("__app/index...");

var components = angular.module('mean-retail.components', ['ng']);

_.each(controllers, function(controller, name) {
  components.controller(name, controller);
});

_.each(directives, function(directive, name) {
  components.directive(name, directive);
});

_.each(services, function(factory, name) {
  components.factory(name, factory);
});

var app = angular.module('mean-retail', ['mean-retail.components', 'ngRoute']);

console.log("ecooo");


app.config(function($routeProvider) {
  $routeProvider.
    when('/category/:category', {
      templateUrl: '../templates/category_view.html'
    }).
    when('/checkout', {
      template: '<checkout></checkout>'
    }).
    when('/product/:id', {
      template: '<product-details></product-details>'
    });
});
