(function() {
  var app = angular.module('network', []);

  app.controller('NetworkController', function() {
    this.operatorName = null;
    this.currentNetworkBar = 0;
    this.isWifiConnected = false;

    this.setCurrentNetworkBar = function(currentNetworkBar) {
      if (isNaN(currentNetworkBar))
        return ;
      this.currentNetworkBar = parseInt(currentNetworkBar);
    }
    this.hasNetwork = function() {
      return this.currentNetworkBar !== 0;
    }

    this.setWifiConnected = function(isWifiConnected) {
      this.isWifiConnected = isWifiConnected;
    }
    this.hasWifi = function() {
      return this.isWifiConnected;
    }
  });
})();
