'use strict';

/**
* MHCApp remote data service
*
* Description
*/
angular.module('MHCApp')
  .factory('AppServiceRemote', function ($http, AppDataUrl) {

    var getQuestions = function() {
      return $http.get(AppDataUrl)
            .success(function(response) {
              console.log('DATA:', response);       
              return response;
            })
            .error(function(err) {
              console.log(err);
            });
    };

    function getJewelleryToneChoices() {
      return getQuestions()
          .then(function(response) {
            return response.data.myhijabcolours.myHijabQuestions.jewelleryTone;
          }, function(err) {
            alert('Cannot get Jewellery Tone Choices: ' + err);
          });
    }

    function getVeinColourChoices() {
      return getQuestions()
          .then(function(response) {
            return response.data.myhijabcolours.myHijabQuestions.veinColour;
          }, function(err) {
            alert('Cannot get Vein Colour Choices err: ', err);
          });
    }

    function getEyeColourChoices() {
      return getQuestions()
          .then(function(response) {
            return response.data.myhijabcolours.myHijabQuestions.eyeColour;
          }, function(err) {
            alert('Cannot get Eye Colour Choice err: ', err);
          });
    }

    function getHairColourChoices() {
      return getQuestions()
          .then(function(response) {
            return response.data.myhijabcolours.myHijabQuestions.hairColour;
          }, function(err) {
            alert('Cannot get Hair Colour Choice: ', err);
          });
    }

    return {
      getJewelleryToneChoices: getJewelleryToneChoices,
      getVeinColourChoices: getVeinColourChoices,
      getEyeColourChoices: getEyeColourChoices,
      getHairColourChoices: getHairColourChoices
    };
  });
