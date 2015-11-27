'use strict';
/**
*  Module MHCApp.services
*/
angular.module('MHCApp.services', [])
	/**
	 * mongolab: mongodb://appadmin:pokemon123@ds055722.mongolab.com:55722/appsdb
	 * db username: appadmin
	 * p: pokemon123
	 */
	// .constant('AppDataUrl', '/data/hijab-questions-data.json')
	// .constant('AppDataUrl', 'mongodb://appadmin:pokemon123@ds055722.mongolab.com:55722/appsdb')
	.constant('AppDataUrl', 'https://myhijabcolours.firebaseio.com/')

	// Service from Firebase
	.factory('AppServiceFire', function($http, $window, $firebaseObject, AppDataUrl) {

		var ref = new Firebase(AppDataUrl),

			// get question data from Firebase
			getQuestions = function() {
				return $firebaseObject(ref).$loaded();
			};

		function getJewelleryToneChoices() {
			return getQuestions()
					.then(function(response) {
						return response.myHijabQuestions.jewelleryTone;
					}, function(err) {
						alert('Cannot get Jewellery Tone Choices: ' + err);
					});
		}

		function getVeinColourChoices() {
			return getQuestions()
					.then(function(response) {
						return response.myHijabQuestions.veinColour;
					}, function(err) {
						alert('Cannot get Vein Colour Choices err: ' + err);
					});
		}

		function getEyeColourChoices() {
			return getQuestions()
					.then(function(response) {
						return response.myHijabQuestions.eyeColour;
					}, function(err) {
						alert('Cannot get Eye Colour Choice err: ' + err);
					});
		}

		function getHairColourChoices() {
			return getQuestions()
					.then(function(response) {
						return response.myHijabQuestions.hairColour;
					}, function(err) {
						alert('Cannot get Hair Colour Choice: ' + err);
					});
		}

		return {
			getQuestions: getQuestions,
			getJewelleryToneChoices: getJewelleryToneChoices,
			getVeinColourChoices: getVeinColourChoices,
			getEyeColourChoices: getEyeColourChoices,
			getHairColourChoices: getHairColourChoices
		};
		
	})
	
	// Service not from Firebase
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
	})

	.factory('AppServiceLocal', function($state, $window){

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
