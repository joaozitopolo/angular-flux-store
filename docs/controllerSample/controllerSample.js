/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(angular) {
	
	var module = angular.module('app', ['fStore']);
	
	module.controller('firstController', [ 'fStore', firstController ]);
	module.controller('secondController', [ 'fStore', secondController ]);
	module.controller('otherController', [ 'fStore', otherController ]);
	
	function firstController(fStore) {
		var self = this;
		fStore.subscribe(function(data) { self.data = data; });
		self.updateData = function() { fStore.update(self.data); };
		self.init = function() { fStore.update({ name: 'Paul', address: '18 avenue, 99', city: 'Detroit', phone: '9288-0009' }); };
	}
	
	function secondController(fStore) {
		var self = this;
		fStore.subscribe(function(data) { self.data = data; });
		self.update = function() { fStore.update(self.data); };
		self.updatePhone = function() { fStore.update({ phone: self.data.phone }); };
		self.restore = function() { self.data = fStore.get(); };
	}
	
	function otherController(fStore) {
		var self = this;
		fStore.subscribe(function(data) { self.data = data; });
	}
	
})(angular);
