(function() {
  var app = angular.module('safari', []);

  app.controller('SafariController', function($scope, $sce) {
    this.url = "https://www.google.com/maps/embed/v1/place?q=statue%20of%20liberty&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU";
    $scope.trustUrl = function(src) {
      return $sce.trustAsResourceUrl(src);
    }
  });
})();
