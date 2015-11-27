'use strict';

/**
* MHCApp Home controller
*
* Description
*/
angular.module('MHCApp')
  .controller('HomeCtrl', function($scope, $state) {

    $scope.appname = 'My Hijab Colours';
    $scope.appslogan = 'Choose the right colours that work for you';

    $scope.enterApp = function() {
      $state.go('app.main-menu');
    };

  });
