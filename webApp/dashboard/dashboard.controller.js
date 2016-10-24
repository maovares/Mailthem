/*
  Mailthem 2016
  Marcos Rodríguez Ovares
  Dashboard Controller
*/
'use strict';

angular.module('mailthemApp')
.controller('DashboardController',['$state','UserService',function($state, UserService){
  var th = this;
  th.username = UserService.username;
  th.email = UserService.email;
  th.templates = UserService.templates;

  th.logout = function(){
    UserService.auth = false;
    $state.go('login');
  };

  th.newEmail = function(){
    $state.go('send');
  };

  th.newTemplate = function(){
    $state.go('create');
  };

  th.useTemplate = function(text){
    UserService.message = text;
    $state.go('send');
  };

  th.imagePath = 'http://www.stickees.com/files/avatars/face-avatars/1571-male-face-b2-sticker.png';
}]);
