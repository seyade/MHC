// Ionic MHC App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'MHCApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'MHCApp.controllers' is found in controllers.js
angular.module('MHCApp', [
  'ionic', 
  'firebase'
])
.constant('AppDataUrl', 'https://myhijabcolours.firebaseio.com/')

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    document.addEventListener('deviceready', function(){
      window.screen.lockOrientation('portrait');
    }, false);
    

    // if (window.navigator && window.navigator.splashscreen) {
    //   window.plugins.orientationLock.lock('portrait');
    // }

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    //controller: 'AppCtrl',
    templateUrl: 'templates/menu.html'
  })
  .state('app.main-menu', {
    url: '/main-menu',
    views: {
      'menuContent': {
        templateUrl: 'templates/main-menu.html',
        controller: 'MainMenuCtrl'
      }
    }
  })
  .state('app.intro', {
    url: '/intro',
    views: {
      'menuContent': {
        templateUrl: 'templates/intro.html'
      }
    }
  })
  .state('app.disclaimer', {
    url: '/disclaimer',
    views: {
      'menuContent': {
        templateUrl: 'templates/disclaimer.html'
      }
    }
  })

  .state('app.form', {
    url: '/form',
    abstract: true,
    views: {
      'menuContent': {
        templateUrl: 'templates/form.html',
        controller: 'FormCtrl'
      }
    }
  })
  .state('app.form.jewellery-tone', {
    url: '/jewellery-tone',
    views: {
      'formContent': {
        templateUrl: 'templates/jewellery-tone-form.html',
        controller: 'JewelleryToneCtrl'
      }
    }
  })

  .state('app.form.vein-colour', {
    url: '/vein-colour',
    views: {
      'formContent': {
        templateUrl: 'templates/vein-colour-form.html',
        controller: 'VeinColourCtrl'
      }
    }
  })

  .state('app.form.eye-colour', {
    url: '/eye-colour',
    views: {
      'formContent': {
        templateUrl: 'templates/eye-colour-form.html',
        controller: 'EyeColourCtrl'
      }
    }
  })

  .state('app.form.hair-colour', {
    url: '/hair-colour',
    views: {
      'formContent': {
        templateUrl: 'templates/hair-colour-form.html',
        controller: 'HairColourCtrl'
      }
    }
  })

  .state('app.result', {
    url: '/result',
    views: {
      'menuContent': {
        templateUrl: 'templates/result.html',
        controller: 'ResultCtrl'
      }
    }
  })

  .state('app.colour-slides', {
    url: '/colour-slides',
    views: {
      'menuContent': {
        templateUrl: 'templates/colour-slides.html',
        controller: 'ColourSlidesCtrl'
      }
    }
  })

  .state('app.seasons', {
    url: '/seasons',
    views: {
      'menuContent': {
        templateUrl: 'templates/seasons.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});
