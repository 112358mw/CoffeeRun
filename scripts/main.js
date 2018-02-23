(function(window) {
    'use strict'
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
    var $ = window.jQuery;
    var App = window.App;
    var formHandler = new App.FormHandler(FORM_SELECTOR);
    var checkList = new App.CheckList(CHECKLIST_SELECTOR);
    var DS =  $.ajax({url: "http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders",
            dataType: "jsonp",
            statusCode: {
                200: function (response) {
                    alert('status 200');
                },
                404: function (response) {
                    alert('status  404 ');
                }
            }
     });
    var myTruck = new App.Truck('ncc-1701', new App.DataStore());

  window.myTruck = myTruck;

  checkList.addChickHandler(myTruck.deliverOrder.bind(myTruck)); formHandler.addSubmitHandler(function(data) {
    return myTruck.createOrder.call(myTruck, data)
      .then(function() {
          checkList.addRow.call(checkList, data);
        },
        function() {
          alert('Server unreachable. Try again later.');
        }
      );
  });

  console.log(formHandler);
  formHandler.addInputHandler(App.Validation.isCompanyEmail);
  myTruck.printOrders(checkList.addRow.bind(checkList));
})(window);
