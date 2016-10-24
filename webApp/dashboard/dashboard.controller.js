/*
Mailthem 2016
Marcos Rodríguez Ovares
Dashboard Controller
*/
'use strict';

angular.module('mailthemApp')
.controller('DashboardController',['$state','FireBaseService', 'UserService',
function($state, fireService, UserService){
  var th = this;
  th.username = UserService.username;
  th.email = UserService.email;
  th.templates = UserService.templates;
  th.editing = false;
  th.editString = 'Edit';

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

  th.editTemplate = function(){
    if(th.editing){
      var newArray = fireService.transformFireBaseArray(th.templates);
      fireService.updateTemplates(newArray, th.username,function(err, message){
        if(err){
          alert('Templates update error!');
        }else {
          UserService.templates = newArray;
          th.editing = false;
          th.editString = 'Edit';
          alert('Templates updated!');
        }
      });
    }else {
      th.editing = true;
      th.editString = 'Save';
    }
  };

  th.deleteTemplate = function(i){
    var newArray = fireService.transformFireBaseArray(th.templates);
    newArray.splice(i, 1);
    fireService.updateTemplates(newArray, th.username,function(err, message){
      if(err){
        alert('Templates delete error!');
      }else {
        UserService.templates = newArray;
        th.templates = UserService.templates;
        alert('Template deleted!');
      }
    });
  };

  th.imagePath = 'https://cdn1.iconfinder.com/data/icons/office-web/128/office-46-128.png';
}]);
