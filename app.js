(function () {
  'use strict';

  var app = angular.module('somecoolapp', []);

  app.controller('MainCtrl', function ($scope, $http) {
    var main = this;

    $http.get('http://localhost:3000/users')
         .success(function (data) {
            main.users = data;
            console.log(data);
         });
    main.addUser = function (user) {
      
      main.users.push({firstName: main.user.firstName, lastName: main.user.lastName});
    };

  });
})();
