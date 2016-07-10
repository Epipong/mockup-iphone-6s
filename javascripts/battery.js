(function() {
  var app = angular.module('battery', []);

  app.controller('BatteryController', ['$scope', function($scope) {
    var NOT_APPLICABLE = "N/A";

    $scope.level;
    $scope.status;
    $scope.status_image = "images/status_charge.png";
    $scope.background_color = "#ffffff";

    var setBatteryLevel = function(level, callback) {
      if (level !== NOT_APPLICABLE) {
        $scope.level = parseInt(level * 100);
      } else {
        $scope.level = 100;
      }

      if (callback && typeof(callback) === "function") {
        callback();
      }
      $scope.$apply();
    };

    var setChargingStatus = function(status, callback) {
      if (status !== NOT_APPLICABLE) {
        $scope.status = status;
        $scope.background_color = status ? "#00ff01" : "#ffffff";
      } else {
        $scope.status = true;
      }

      if (callback && typeof(callback) === "function") {
        callback();
      }
      $scope.$apply();
    };

    try {
      navigator.getBattery().then(function(battery) {
        setBatteryLevel(battery.level);
        setChargingStatus(battery.charging);

        battery.onlevelchange = function(evt) {
          var _level = battery.level;
          setBatteryLevel(_level);
        };

        battery.onchargingchange = function(evt) {
          var _charging = battery.charging;
            setChargingStatus(_charging);
        }
      });
    }
    catch (e) {
      var error = "Unable to retrieve battery status. You may be using an incompatible browser. At the time of this demo, the Battery Status API is only available in Google Chrome 38+ or Opera 25+ and is in Working Draft status. Error Message: " + e;
      console.log(error);

      setBatteryLevel(NOT_APPLICABLE);
      setChargingStatus(NOT_APPLICABLE);
    }
  }]);

})();
