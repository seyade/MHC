'use strict';

/**
* MHCApp firebase data service
*
* Description
*/
angular.module('MHCApp')
  .factory('AppServiceFire', function($http, $window, $firebaseObject, AppDataUrl) {

    var ref = new Firebase(AppDataUrl),

      // get question data from Firebase
      getQuestions = function() {
        return $firebaseObject(ref).$loaded();
      };

    function getJewelleryToneChoices() {
      return getQuestions()
          .then(function(response) {
            return response.myHijabQuestions.jewelleryTone;
          }, function(err) {
            alert('Cannot get Jewellery Tone Choices: ' + err);
          });
    }

    function getVeinColourChoices() {
      return getQuestions()
          .then(function(response) {
            return response.myHijabQuestions.veinColour;
          }, function(err) {
            alert('Cannot get Vein Colour Choices err: ' + err);
          });
    }

    function getEyeColourChoices() {
      return getQuestions()
          .then(function(response) {
            return response.myHijabQuestions.eyeColour;
          }, function(err) {
            alert('Cannot get Eye Colour Choice err: ' + err);
          });
    }

    function getHairColourChoices() {
      return getQuestions()
          .then(function(response) {
            return response.myHijabQuestions.hairColour;
          }, function(err) {
            alert('Cannot get Hair Colour Choice: ' + err);
          });
    }

    return {
      getQuestions: getQuestions,
      getJewelleryToneChoices: getJewelleryToneChoices,
      getVeinColourChoices: getVeinColourChoices,
      getEyeColourChoices: getEyeColourChoices,
      getHairColourChoices: getHairColourChoices
    };
    
  });
