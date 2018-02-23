(function(window) {
  'use strict'
  var App = window.App || {};
  var Promise = window.Promise;

  function DataStore() {
    console.log('running the DataStore function');
    this.data = {};
  }

  function promiseResolvedWith(value) {
    var promise = new Promise(function (resolve, reject) {
      resolve(value);
    });
    return promise;
  }

  DataStore.prototype.add = function(key, val) {
      this.data[key] = val;

    return promiseResolvedWith(null);
  };

  DataStore.prototype.getAll = function() {
    return promiseResolvedWith(this.data);
  };


  DataStore.prototype.remove = function(key) {
    delete this[key];
    return promiseResolvedWith(null);
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
