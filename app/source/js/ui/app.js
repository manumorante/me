var manu = angular.module('manu', ['ngRoute']);

manu.controller('MainCtrl', function($scope) {});

manu.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html'
    })
    .when('/about', {
      templateUrl: 'about.html'
    })
    .when('/contact', {
      templateUrl: 'contact.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});