/**
 * Routes
 */
app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html'
    })
    .when('/polaroids', {
      templateUrl: 'views/polaroids.html'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html'
    })
    .otherwise({
      templateUrl: 'views/home.html'
    });
});
