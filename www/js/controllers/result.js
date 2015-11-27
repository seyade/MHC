'use strict';

/**
* MHCApp Result page controller
*
* Description
*/
angular.module('MHCApp')
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
    if (!$scope.userChoices.tone && !$scope.userChoices.vein && !$scope.userChoices.eye && !$scope.userChoices.hair) {
      $scope.season = 'What season are you?';
      $scope.palette = 'No Season!';
    }

  });
