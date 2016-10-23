/*
  Mailthem 2016
  Marcos Rodríguez Ovares
  Signup Controller
*/
'use strict';

angular.module('mailthemApp')
.controller('SignupController',['$state','md5','FireBaseService',function($state, md5, fireService){
  var th = this;
  th.username = "";
  th.email = "";
  th.password = "";
  th.repassword = "";

  th.signup = function(){
    var md5Password = md5.createHash(th.password);
    fireService.signup(th.username, th.email, md5Password, function(err, message){
      if(err){
          alert("Signup error, try other user and email");
      }else {
          $state.go('login');
      }
    });
  };

}]);
