'use strict';

describe('Controllers', function() {

	beforeEach(module('ui.router'));
	beforeEach(module('starter.controllers'));

	describe('HomeCtrl', function() {

		var scope, $controller, state;

		beforeEach(inject(function($rootScope, _$controller_, _$state_) {
			scope = $rootScope.$new();
			$controller = _$controller_;
			state = _$state_

			$controller('HomeCtrl', {
				$scope: scope,
				$state: state
			});
		}));

		it('should display app name: \'My Hijab Colours\'', function() {
			expect(scope.appname).toBe('My Hijab Colours');
		});

		it('should display app slogan: \'Choose the right colours that work for you\'', function() {
			expect(scope.appslogan).toBe('Choose the right colours that work for you');
		});
	});
});
