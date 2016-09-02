(function() {
  var app = angular.module('screen', []);

  app.controller('ScreenController', function() {
    this.home = "views/main.htm";

    this.current = this.home;

    this.setCurrentScreen = function(path) {
      if (path) {
        this.current = path;
      }
    }

    this.setCursor = function(path) {
      if (path) {
        return { 'cursor': 'pointer' };
      }
    }
  });
})();
