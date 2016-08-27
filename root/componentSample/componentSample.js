/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(angular) {
	
	var module = angular.module('app', ['fStore']);
	
	module.controller('loadController', ['fStore', '$http', loadController]);
	
	module.component('myList', { templateUrl: 'myListTemplate.html', controller: 'fStoreController' } );
	
	module.component('mySummary', { templateUrl: 'mySummaryTemplate.html', controller: summaryController } );

	module.component('myForm', { templateUrl: 'myFormTemplate.html', controller: formController } );

	function loadController(fStore, $http) {
		$http({ method: 'GET', url: 'remoteData.json' })
		.then(function(result) {
			fStore.update(result.data);
		});
	}
	
	function summaryController(fStore) {
		var self = this;
		fStore.subscribe(function(data) {
			var total = 0;
			angular.forEach(data.list, function(item) {
				if(angular.isNumber(item.price) && angular.isNumber(item.qt)) {
					total += (item.price * item.qt);
				}
			});
			self.total = total;
		});
	}
	
	function formController(fStore) {
		var self = this;
		self.item = {};
		self.add = function() {
			var list = fStore.get().list;
			list.push(self.item);
			fStore.update({ list: list });
			self.item = {};
		};
	}
	
})(angular);
