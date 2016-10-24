/*
  Mailthem 2016
  Marcos Rodríguez Ovares
  CSV Factory
*/
'use strict';

angular.module('mailthemApp')
.service('CSV', ['$http', function($http){
  var th = this;
  /*var Url   = "src/utils/some.csv";
  var Items = $http.get(Url).then(function(response){
     return csvParser(response.data);
  });*/

  th.csvToArry = function(url){
    var Items = $http.get("C:\Users\Marcos Rodríguez Ova\Downloads\contacts.csv").then(function(response){
       //return csvParser(response.data);
       return response.data;
    });
  };

}]);
