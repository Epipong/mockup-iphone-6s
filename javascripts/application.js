(function() {
  var app = angular.module('application', []);

  app.controller('ApplicationController', function() {
    this.applications = applications;
    this.shortcuts = shortcuts;

    this.addNewApplication = function(app_name, app_logo) {
      this.applications.push({name: app_name, logo: app_logo, notifications: 0,
        built_in: false});
    };
  });

  var shortcuts = [
    {
      name: "Phone",
      logo: "images/ios-phone.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "Mail",
      logo: "images/ios-mail.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "Safari",
      logo: "images/ios-safari.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "Music",
      logo: "images/ios-music.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
  ];

  var applications = [
    {
      name: "Messages",
      logo: "images/ios-messages.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "Calendar",
      logo: "images/ios-calendar.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/calendar/calendar.htm",
    },
    {
      name: "Photos",
      logo: "images/ios-photos.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "Camera",
      logo: "images/ios-camera.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "Weather",
      logo: "images/ios-weather.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "Clock",
      logo: "",
      notifications: 0,
      built_in: true,
      icon: "views/icons/clock/clock.htm",
    },
    {
      name: "Maps",
      logo: "images/ios-maps.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "Videos",
      logo: "images/ios-videos.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "Notes",
      logo: "images/ios-note.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "Reminders",
      logo: "images/ios-reminders.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "Stocks",
      logo: "images/ios-stocks.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "iTune Store",
      logo: "images/ios-itune-store.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "App Store",
      logo: "images/appstore-icon.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "iBooks",
      logo: "images/ios-ibook.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "Health",
      logo: "images/ios-health.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "Settings",
      logo: "images/ios-settings.png",
      notifications: 0,
      built_in: true,
      icon: "views/icons/default.htm",
    },
    {
      name: "Teysser",
      logo: "images/ios-teysser.png",
      notifications: 0,
      built_in: false,
      icon: "views/icons/default.htm",
    },
  ];

})();
