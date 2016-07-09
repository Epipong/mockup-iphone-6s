(function() {
  var app = angular.module('battery', []);

  app.controller('BatteryController', function() {
    this.currentBattery = 75;
    this.maxBattery = 100;

    this.setBattery = function(battery) {
      if (isNaN(currentNetworkBar))
        return ;
      this.currentBattery = parseInt(battery) % this.maxBattery;
    };
  });
})();
