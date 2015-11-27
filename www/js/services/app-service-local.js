'use strict';

/**
* MHCApp localstorage service
*
* Description
*/
angular.module('MHCApp')
  .factory('AppServiceLocal', function($state, $window) {

    function saveUserChoices(data) {
      $window.localStorage.setItem('userChoices', JSON.stringify(data));
    }

    function deleteUserChoices() {
      $window.localStorage.clear();
    }

    function getUserChoices() {
      return JSON.parse($window.localStorage.getItem('userChoices'));
    }

    return {
      getUserChoices: getUserChoices,
      saveUserChoices: saveUserChoices,
      deleteUserChoices: deleteUserChoices
    };
  });