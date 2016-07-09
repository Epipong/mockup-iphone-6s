(function() {
  var app = angular.module('time', []);

  var weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
    'Saturday', 'Sunday'];

  app.controller('TimeController', ['$scope', function ($scope) {
    $scope.format = 'h:mm a';
  }]);

  app.directive('currentTime', function(dateFilter) {
    return function(scope, element, attrs) {
      var format;

      scope.$watch(attrs.currentTime, function(value) {
				format = value;
				updateTime();
			});

			function updateTime(){
				var dt = dateFilter(new Date(), format);
				element.text(dt);
			}

			function updateLater() {
				setTimeout(function() {
					updateTime(); // update DOM
					updateLater(); // schedule another update
				}, 1024);
			}

			updateLater();
    }
  });

})();
