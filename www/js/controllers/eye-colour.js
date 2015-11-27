'use strict';

/**
* MHCApp Eye colour controller
*
* Description
*/
angular.module('MHCApp')
  .controller('EyeColourCtrl', function($scope, $state, AppServiceFire) {

    AppServiceFire
      .getEyeColourChoices()
      .then(function(resp) {
        $scope.question = resp.question;
        $scope.answers = resp.answers;
      });
  });
