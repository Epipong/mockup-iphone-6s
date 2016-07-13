(function() {
  var app = angular.module('application', ['screen']);

  app.controller('ApplicationController', function() {
    this.applications = applications;
    this.shortcuts = shortcuts;

    this.addApplication = function(app_name, app_logo) {
      this.applications.push({name: app_name, logo: app_logo, notifications: 0,
        built_in: false});
    };

    this.setLogo = function(logo) {
      var style = null;
      if (logo) {
        style = { 'background-image': 'url(' + logo + ')' };
      }
      return style;
    }
  });

  var shortcuts = [
    {
      name: "Phone",
      logo: "images/ios-phone.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "Mail",
      logo: "images/ios-mail.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "Safari",
      logo: "images/ios-safari.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "views/apps/safari/safari.htm",
    },
    {
      name: "Music",
      logo: "images/ios-music.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
  ];

  var applications = [
    {
      name: "Messages",
      logo: "images/ios-messages.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "Calendar",
      logo: "images/ios-calendar.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/calendar/calendar.htm",
      path: "",
    },
    {
      name: "Photos",
      logo: "images/ios-photos.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "Camera",
      logo: "images/ios-camera.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "Weather",
      logo: "images/ios-weather.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "Clock",
      logo: "",
      notifications: 0,
      built_in: true,
      icon: "views/icons/clock/clock.htm",
      path: "",
    },
    {
      name: "Maps",
      logo: "images/ios-maps.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "Videos",
      logo: "images/ios-videos.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "Notes",
      logo: "images/ios-note.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "Reminders",
      logo: "images/ios-reminders.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "Stocks",
      logo: "images/ios-stocks.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "iTune Store",
      logo: "images/ios-itune-store.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "App Store",
      logo: "images/appstore-icon.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "iBooks",
      logo: "images/ios-ibook.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "Health",
      logo: "images/ios-health.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "Settings",
      logo: "images/ios-settings.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "",
    },
    {
      name: "Calculator",
      logo: "images/ios-calculator.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
      path: "views/apps/calculator/calculator.htm",
    },
    {
      name: "Teysser",
      logo: "images/ios-teysser.png",
      notifications: 0,
      built_in: false,
      icon: "views/icons/default.htm",
      path: "",
    },
  ];

})();
