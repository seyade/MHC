'use strict';

/**
* MHCApp Form shell controller
*
* Description
* This form contains the quiz
*/
angular.module('MHCApp')
	.controller('FormCtrl', function($scope, $state, AppServiceLocal) {

	  $scope.formData = {};

	  $scope.processData = function() {
	    $state.go('app.result');
	    AppServiceLocal.saveUserChoices($scope.formData);
	  };

	});
