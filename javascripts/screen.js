(function() {
  var app = angular.module('screen', []);

  app.controller('ScreenController', function() {
    this.home = "views/main.htm";
    // this.home = "views/apps/calculator/calculator.htm";
    this.current = this.home;

    this.setCurrentScreen = function(path) {
      this.current = path;
    }
  });
})();
