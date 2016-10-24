/*
Mailthem 2016
Marcos Rodríguez Ovares
User Service
*/
'use strict';

angular.module('mailthemApp')
.service('UserService',function(){
  var th = this;
  th.username = '';
  th.email = '';
  th.auth = false;
  th.templates = [];
});
