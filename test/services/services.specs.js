'use strict';

describe('Services', function() {

	var AppServicesRemote, AppServicesFire, AppServicesLocal;

	beforeEach(module('firebase'));
	beforeEach(module('ui-router'));
	beforeEach(module('starter.services'));

	beforeEach(inject(function(_AppServicesRemote_, _AppServicesFire_, _AppServicesLocal_) {
		AppServicesRemote = _AppServicesRemote_;
		AppServicesFire = _AppServicesFire_;
		AppServicesLocal = _AppServicesLocal_;
	}));

	describe('AppServicesRemote', function() {

		it('should be defined', function() {
			expect(AppServicesRemote).toBeDefined();
		});

		it('should be able to get jewellery tone choices', function() {
	    	expect(AppServicesRemote.getJewelleryToneChoices()).toBeDefined();
	    });

	    it('should be able to get vein colour choices', function() {
	    	expect(AppServicesRemote.getVeinColourChoices()).toBeDefined();
	    });

	    it('should be able to get eye colour choices', function() {
	    	expect(AppServicesRemote.getEyeColourChoices()).toBeDefined();
	    });

	    it('should be able to get hair colour choices', function() {
	    	expect(AppServicesRemote.getHairColourChoices()).toBeDefined();
	    });
	});

	describe('AppServicesFire', function() {
		expect(AppServicesRemote).toBeDefined();
	});

	describe('AppServicesLocal', function() {

	});
});
