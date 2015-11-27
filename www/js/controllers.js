angular.module('MHCApp.controllers', [])

// Home page
.controller('HomeCtrl', function($scope, $state) {

  $scope.appname = 'My Hijab Colours';
  $scope.appslogan = 'Choose the right colours that work for you';

  $scope.enterApp = function() {
    $state.go('app.main-menu');
  };
})

// Main menu
.controller('MainMenuCtrl', function($scope, $state) {
  $scope.enterQuiz = function() {
    $state.go('app.form.jewellery-tone');
  };

  $state.reload(); 
})

// Form container
.controller('FormCtrl', function($scope, $state, AppServiceLocal) {

  $scope.formData = {};

  $scope.processData = function() {
    $state.go('app.result');
    AppServiceLocal.saveUserChoices($scope.formData);
  };
})

// Jewellery Tone
.controller('JewelleryToneCtrl', function($scope, $state, $ionicLoading, $window, AppServiceFire) {

  $ionicLoading.show({
    template: 'Loading...',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  
  AppServiceFire
    .getJewelleryToneChoices()
    .then(function(resp) {
      $scope.question = resp.question;
      $scope.answers = resp.answers;

      $ionicLoading.hide();
    });
})

// Vein Colour
.controller('VeinColourCtrl', function($scope, $state, AppServiceFire) {

  AppServiceFire
    .getVeinColourChoices()
    .then(function(resp) {
      $scope.question = resp.question;
      $scope.answers = resp.answers;
    });
})

// Eye Colour
.controller('EyeColourCtrl', function($scope, $state, AppServiceFire) {

  AppServiceFire
    .getEyeColourChoices()
    .then(function(resp) {
      $scope.question = resp.question;
      $scope.answers = resp.answers;
    });
})

// Hair Colour
.controller('HairColourCtrl', function($scope, $state, AppServiceFire) {

  AppServiceFire
    .getHairColourChoices()
    .then(function(resp) {
      $scope.question = resp.question;
      $scope.answers = resp.answers;
    });
})

// Result
.controller('ResultCtrl', function($scope, $state, $window, AppServiceLocal) {

  var jewelTone, veinColour, eyeColour, 
      hairColour, silverTone, goldTone, 
      greenVein, blueVein, greyBlueBlackEye, 
      greenHazelBrownEye, lightblondeGingerDarkblondeHair, lightbrownDarkbrownBlackHair;

  $scope.userChoices = {};

  $scope.userChoices = AppServiceLocal.getUserChoices();

  jewelTone = $scope.userChoices.tone;
  veinColour = $scope.userChoices.vein;
  eyeColour = $scope.userChoices.eye;
  hairColour = $scope.userChoices.hair;
  
  $scope.restartChoices = function() {
    $state.go('app.main-menu');
    AppServiceLocal.deleteUserChoices();
    //window.location.reload();
  };

  $scope.browseColours = function() {
    $state.go('app.colour-slides');
  };
  
  // jewel tone
  silverTone = (jewelTone === 'silver');
  goldTone = (jewelTone === 'gold');

  // vein colour
  greenVein = (veinColour === 'green');
  blueVein = (veinColour === 'blue');

  // eye colour
  greyBlueBlackEye = (eyeColour === 'grey' || eyeColour === 'blue' || eyeColour === 'black');
  greenHazelBrownEye = (eyeColour === 'green' || eyeColour === 'hazel' || eyeColour === 'brown');

  // hair colour
  lightblondeGingerDarkblondeHair = (hairColour === 'light blonde' || hairColour === 'ginger' || hairColour === 'dark blonde');
  lightbrownDarkbrownBlackHair = (hairColour === 'light brown' || hairColour === 'dark brown' || hairColour === 'black');

  /**
   * Jewel: Silver
   * Vein: Green  
   * Eye: Grey, Blue, Black, 
   * Hair: Light Blonde, Ginger, Dark Blonde 
   * Type: You are a Summer with hint of Spring
   */
  if (silverTone && greenVein && greyBlueBlackEye && lightblondeGingerDarkblondeHair) {
    $scope.season = 'You are a Summer with hint of Spring';
    $scope.palette = 'Summer/Spring Palette';
  }

  /**
   * Jewel: Silver
   * Vein: Green  
   * Eye: Grey, Blue, Black, 
   * Hair: Light Brown, Dark Brown, Black
   * Type: You are a Winter with a hint of Autumn
   */
  if (silverTone && greenVein && greyBlueBlackEye && lightbrownDarkbrownBlackHair) {
    $scope.season = 'You are a Winter with a hint of Autumn';
    $scope.palette = 'Winter/Autumn Palette';
  }

  /**
   * Jewel: Silver
   * Vein: Green  
   * Eye: Green, Hazel, Brown  
   * Hair: Light Blonde, Ginger, Dark Blonde 
   * Type: You are a Spring with a hint of Summer
   */
  if (silverTone && greenVein && greenHazelBrownEye && lightblondeGingerDarkblondeHair) {
    $scope.season = 'You are a Spring with a hint of Summer';
    $scope.palette = 'Spring/Summer Palette';
  }

  /**
   * Jewel: Silver
   * Vein: Green  
   * Eye: Green, Hazel, Brown 
   * Hair: Light Brown, Dark Brown, Black
   * Type: You are an Autumn with a hint of Winter
   */
  if (silverTone && greenVein && greenHazelBrownEye && lightbrownDarkbrownBlackHair) {
    $scope.season = 'You are an Autumn with a hint of Winter';
    $scope.palette = 'Autumn/Winter Palette';
  }

  /**
   * Jewel: Silver
   * Vein: Blue  
   * Eye: Blue  Grey, Black, 
   * Hair: Light Blonde, Ginger, Dark Blonde 
   * Type: You are a True Summer
   */
  if (silverTone && blueVein && greyBlueBlackEye && lightblondeGingerDarkblondeHair) {
    $scope.season = 'You are a True Summer';
    $scope.palette = 'Summer Palette';
  }

  /**
   * Jewel: Silver  
   * Vein: Blue  
   * Eye: Grey, Blue, Black 
   * Hair: Light Brown, Dark Brown, Black  
   * Type: You are a True Winter
   */
  if (silverTone && blueVein && greyBlueBlackEye && lightbrownDarkbrownBlackHair) {
    $scope.season = 'You are a True Winter';
    $scope.palette = 'Winter Palette';
  }
  
  /**
   * Jewel: Silver  
   * Vein: Blue  
   * Eye: Green, Hazel, Brown 
   * Hair: Light Blonde, Ginger, Dark Blonde 
   * Type: You are a Summer with a hint of Spring
   */
  if (silverTone && blueVein && greenHazelBrownEye && lightblondeGingerDarkblondeHair) {
    $scope.season = 'You are a Summer with a hint of Spring';
    $scope.palette = 'Summer/Spring Palette';
  }
  
  /**
   * Jewel: Silver  
   * Vein: Blue  
   * Eye: Green, Hazel, Brown 
   * Hair: Light Brown, Dark Brown, Black  
   * Type: You are a Winter with a hint of Autumn
   */
  if (silverTone && blueVein && greenHazelBrownEye && lightbrownDarkbrownBlackHair) {
    $scope.season = 'You are a Winter with a hint of Autumn';
    $scope.palette = 'Winter/Autumn Palette';
  }
  
  /**
   * Jewel: Gold  
   * Vein: Green 
   * Eye: Grey, Blue, Black 
   * Hair: Light Blonde, Ginger, Dark Blonde 
   * Type: You are a Spring with a hint Summer
   */
  if (goldTone && greenVein && greyBlueBlackEye && lightblondeGingerDarkblondeHair) {
    $scope.season = 'You are a Spring with a hint of Summer';
    $scope.palette = 'Spring/Summer Palette';
  }
  
  /**
   * Jewel: Gold  
   * Vein: Green 
   * Eye: Grey, Blue, Black 
   * Hair: Light Brown, Dark Brown, Black  
   * Type: You are an Autumn with a hint of Winter
   */
  if (goldTone && greenVein && greyBlueBlackEye && lightbrownDarkbrownBlackHair) {
    $scope.season = 'You are an Autumn with a hint of Winter';
    $scope.palette = 'Autumn/Winter Palette';
  }
  
  /**
   * Jewel: Gold  
   * Vein: Green 
   * Eye: Green, Hazel, Brown 
   * Hair: Light Blonde, Ginger, Dark Blonde 
   * Type: You are a True Spring
   */
  if (goldTone && greenVein && greenHazelBrownEye && lightblondeGingerDarkblondeHair) {
    $scope.season = 'You are a True Spring';
    $scope.palette = 'Spring Palette';
  }
  
  /**
   * Jewel: Gold  
   * Vein: Green 
   * Eye: Green, Hazel, Brown 
   * Hair: Light Brown, Dark Brown, Black  
   * Type: You are a True Autumn
   */
  if (goldTone && greenVein && greenHazelBrownEye && lightbrownDarkbrownBlackHair) {
    $scope.season = 'You are a True Autumn';
    $scope.palette = 'Autumn Palette';
  }
  
  /**
   * Jewel: Gold  
   * Vein: Blue  
   * Eye: Grey, Blue, Black 
   * Hair: Light Blonde, Ginger, Dark Blonde 
   * Type: You are a Summer with a hint of Spring
   */
  if (goldTone && blueVein && greyBlueBlackEye && lightblondeGingerDarkblondeHair) {
    $scope.season = 'You are a Summer with a hint of Spring';
    $scope.palette = 'Summer/Spring Palette';
  }
  
  /**
   * Jewel: Gold  
   * Vein: Blue  
   * Eye: Grey, Blue, Black 
   * Hair: Light Brown, Dark Brown, Black  
   * Type: You are a Winter with a hint of Autumn
   */
  if (goldTone && blueVein && greyBlueBlackEye && lightbrownDarkbrownBlackHair) {
    $scope.season = 'You are a Winter with a hint of Autumn';
    $scope.palette = 'Winter/Autumn Palette';
  }
  
  /**
   * Jewel: Gold  
   * Vein: Blue  
   * Eye: Green, Hazel, Brown 
   * Hair: Light Blonde, Ginger, Dark Blonde 
   * Type: You are a Spring with a hint of Summer
   */
  if (goldTone && blueVein && greenHazelBrownEye && lightblondeGingerDarkblondeHair) {
    $scope.season = 'You are a Spring with a hint of Summer';
    $scope.palette = 'Spring/Summer Palette';
  }
  
  /**
   * Jewel: Gold  
   * Vein: Blue  
   * Eye: Green, Hazel, Brown 
   * Hair: Light Brown, Dark Brown, Black  
   * Type: You are an Autumn with a hint of Winter
   */
  if (goldTone && blueVein && greenHazelBrownEye && lightbrownDarkbrownBlackHair) {
    $scope.season = 'You are an Autumn with a hint of Winter';
    $scope.palette = 'Autumn/Winter Palette';
  }

  // if no selections
  if ((!$scope.userChoices.tone) && (!$scope.userChoices.vein) && (!$scope.userChoices.eye) && (!$scope.userChoices.hair) ) {
    $scope.season = 'What season are you?';
    $scope.palette = 'No Season!';
  }

})

// Colour slides
.controller('ColourSlidesCtrl', function($scope, $state, AppServiceLocal) {

  $scope.colours = [
    { name: 'Dark grayish blue', hex: '#8ea9b2' },
    { name: 'Dark grayish red', hex: '#b2978e' },
    { name: 'Dark grayish blue', hex: '#978eb2' },
    { name: 'Desaturated dark blue', hex: '#6e6391' },
    { name: 'Black', hex:'#222' }
  ];

})


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});
