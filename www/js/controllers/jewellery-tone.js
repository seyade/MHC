'use strict';

/**
* MHCApp Jewellery tone controller
*
* Description
*/
angular.module('MHCApp')
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
  });
