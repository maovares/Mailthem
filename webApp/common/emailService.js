/*
Mailthem 2016
Marcos Rodríguez Ovares
Email Service
*/
'use strict';

angular.module('mailthemApp')
.service('EmailService',function($http){
  var th = this;

  th.sendEmail = function (eFrom, eToList, eSubject, eText, callback){
    $http({method: 'POST', url: '/sendEmail/' + eFrom + '/' +
    eToList + '/' + eSubject+ '/' + eText}).
    then(
      function (response) {
        callback(response);
      },
      function (response) {
        callback(response);
      }
    );
  };

});
