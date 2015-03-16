var manu = angular.module('manu', ['ngRoute']);

manu.controller('MainCtrl', function($scope) {});

manu.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html'
    })
    .when('/team', {
      templateUrl: 'views/team.html'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});