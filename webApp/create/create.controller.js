/*
Mailthem 2016
Marcos Rodríguez Ovares
Create Controller
*/
'use strict';

angular.module('mailthemApp')
.controller('CreateController',['$state', 'FireBaseService','UserService',function($state, fireService, UserService){
  var th = this;
  th.username = UserService.username;
  th.email = UserService.email;
  th.templateName = '';
  th.textTemplate = '';
  th.templatesArray = UserService.templates;

  th.createTemplate = function(){
    var newArray = fireService.transformFireBaseArray(th.templatesArray);
    newArray.push({'name':th.templateName, 'text':th.textTemplate});
    fireService.updateTemplates(newArray, th.username,function(err, message){
      if(err){
        alert(message);
      }else {
        alert(message);
        UserService.templates = newArray;
        $state.go('dashboard');
      }
    });
  };

}]);
