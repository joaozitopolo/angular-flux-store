/** store service for Angular 1.x with Javascript EC5 */

(function(angular) {
	
	var module = angular.module('fStore', []);
	
	module.service('fStore', fStore);
    module.controller('fStoreController', ['fStore', fStoreBasicController]);
	
	function fStore() {

		this.get = get;
		this.update = update;
		this.subscribe = subscribe;
		this.unsubscribe = unsubscribe;

		var data = {};
		var listeners = [];

		function get() {
			return angular.extend({}, data);
		}
		
		function update(incomingData) {
			if(angular.isObject(incomingData)) {
				var oldData = data;
				data = angular.extend({}, data, incomingData);
				callListeners(data, oldData);
			}
			return data;
		}

		function subscribe(listener/*(data, oldData)*/) {
			listeners.push(listener);
			listener(get(), {});
			return function() { unsubscribe(listener); };
		}

		function unsubscribe(listener) {
			var idx = listeners.indexOf(listener);
			if(idx >= 0) {
				listeners.splice(idx, 1);
			}
		}

		function callListeners(data, oldData) {
			angular.forEach(listeners, function (listener) {
				listener(get(), oldData);
			});
		}

	}

    function fStoreBasicController(store) {
        var self = this;
        self.$destroy = store.subscribe(function(data) { self.data = data; });
        self.update = function() { store.update(self.data); };
    }
	
})(angular);
