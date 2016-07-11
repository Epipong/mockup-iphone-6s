(function() {
  var app = angular.module('network', []);

  app.controller('NetworkController', ['$scope', function($scope) {
    $scope.connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if ($scope.connection == null) {
      console.log('scope connection undefined');
      return ;
    }
    $scope.type = $scope.connection.type;

    var updateConnectionStatus = function() {
      console.log("Connection type is change from " + $scope.type + " to " + $scope.connection.type);
    }

    connection.addEventListener('typechange', updateConnectionStatus);
  }]);
})();
