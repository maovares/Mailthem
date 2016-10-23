/*
  Mailthem 2016
  Marcos Rodríguez Ovares
  Firebase Service
*/
'use strict';

angular.module('mailthemApp')
.service('UserService',function(){
  var th = this;
  th.username = '';
  th.email = '';
  th.auth = false;
});
