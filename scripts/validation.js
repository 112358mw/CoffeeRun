(function (window) {
  'use strict';
  var App = window.App || {};
  var Validation = {
      isCompanyEmail: function (email) {
        return /.+@123\.com$/.test(email);
      }
  };

  App.Validation = Validation;
  window.App = App;

})(window);
