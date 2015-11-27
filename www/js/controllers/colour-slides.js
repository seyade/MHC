'use strict';

/**
* MHCApp Colour slides controller
*
* Description
*/
angular.module('MHCApp')
  .controller('ColourSlidesCtrl', function($scope, $state, AppServiceLocal) {

    $scope.colours = [
      { name: 'Dark grayish blue', hex: '#8ea9b2' },
      { name: 'Dark grayish red', hex: '#b2978e' },
      { name: 'Dark grayish blue', hex: '#978eb2' },
      { name: 'Desaturated dark blue', hex: '#6e6391' },
      { name: 'Black', hex:'#222' }
    ];

  });
