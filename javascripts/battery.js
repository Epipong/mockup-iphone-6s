(function() {
  var app = angular.module('battery', []);

  app.controller('BatteryController', ['$scope', function($scope) {
    var NOT_APPLICABLE = "N/A";

    $scope.level;
    $scope.status;

    var setBatteryLevel = function(level, callback) {
      $scope.level = level * 100;
      console.log($scope.level);

      if (callback && typeof(callback) === "function") {
        callback();
      }
      $scope.$apply();
    };

    var setChargingStatus = function(status, callback) {
      $scope.status = status;
      console.log($scope.status);

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
          setBatteryLevel(_level, function() {
            console.log("Battery level changed: " + _level, battery);
          });
        };

        battery.onchargingchange = function(evt) {
          var _charging = battery.charging;
            setChargingStatus(_charging, function() {
            console.log("Battery charging status changed: " + _charging, battery);
          });
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
