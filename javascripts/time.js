(function() {
  var app = angular.module('time', []);

  app.controller('TimeController', ['$scope', function($scope) {
    $scope.format = 'h:mm a';
  }]);

  app.controller('ClockController', function() {
    var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var hands = [
      {
        hand: 'hours',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        angle: (minutes * 6)
      },
      {
        hand: 'seconds',
        angle: (seconds * 6)
      }
    ];
});
    for(var j = 0; j < hands.length; j++) {
      var elements = document.querySelectorAll('.' + hands[j].hand);
      for(var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
        elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
        if(hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j+ 1].angle);
        }
      }
    }
  });

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
