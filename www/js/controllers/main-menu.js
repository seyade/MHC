'use strict';

/**
* MHCApp Main menu controller
*
* Description
*/
angular.module('MHCApp')
  .controller('MainMenuCtrl', function($scope, $state) {
    $scope.enterQuiz = function() {
      $state.go('app.form.jewellery-tone');
    };

    $state.reload(); 
  });
