'use strict';

/**
* MHCApp Vein colour controller
*
* Description
*/
angular.module('MHCApp')
  .controller('VeinColourCtrl', function($scope, $state, AppServiceFire) {

    AppServiceFire
      .getVeinColourChoices()
      .then(function(resp) {
        $scope.question = resp.question;
        $scope.answers = resp.answers;
      });

  });
