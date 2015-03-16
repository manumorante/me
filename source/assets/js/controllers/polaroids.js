/**
 * Polaroids
 */
app.controller('PolaroidsCtrl', ['$scope', '$location', function($scope, $location) {

  console.log("Section Polaroids.");

  // Run feed
  polaroids_feed.run();

}]);