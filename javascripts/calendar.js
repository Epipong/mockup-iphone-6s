(function() {
  var app = angular.module('calendar', []);

  app.controller('CalendarController', ['$scope', function($scope) {
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var today = new Date();

    $scope.weekday = weekdays[today.getDay()];
    $scope.day = today.getDate();
  }]);
})();
