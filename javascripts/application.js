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
    },
    {
      name: "Mail",
      logo: "images/ios-mail.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "Safari",
      logo: "images/ios-safari.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "Music",
      logo: "images/ios-music.png",
      notifications: 0,
      built_in: true,
    },
  ];

  var applications = [
    {
      name: "Messages",
      logo: "images/ios-messages.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "Calendar",
      logo: "images/ios-calendar.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "Photos",
      logo: "images/ios-photos.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "Camera",
      logo: "images/ios-camera.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "Weather",
      logo: "images/ios-weather.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "Clock",
      logo: "",
      notifications: 0,
      built_in: true,
    },
    {
      name: "Maps",
      logo: "images/ios-maps.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "Videos",
      logo: "images/ios-videos.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "Notes",
      logo: "images/ios-note.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "Reminders",
      logo: "images/ios-reminders.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "Stocks",
      logo: "images/ios-stocks.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "iTune Store",
      logo: "images/ios-itune-store.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "App Store",
      logo: "images/appstore-icon.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "iBooks",
      logo: "images/ios-ibook.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "Health",
      logo: "images/ios-health.png",
      notifications: 0,
      built_in: true,
    },
    {
      name: "Settings",
      logo: "images/ios-settings.png",
      notifications: 0,
      built_in: true,
    },
  ];

})();
