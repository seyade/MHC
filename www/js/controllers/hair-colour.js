'use strict';

/**
* MHCApp Hair colour controller
*
* Description
*/
angular.module('MHCApp')  
  .controller('HairColourCtrl', function($scope, $state, AppServiceFire) {

    AppServiceFire
      .getHairColourChoices()
      .then(function(resp) {
        $scope.question = resp.question;
        $scope.answers = resp.answers;
      });

  });
