/*
Mailthem 2016
Marcos Rodríguez Ovares
Login Controller
*/
'use strict';

angular.module('mailthemApp')
.controller('LoginController',['$state','md5','FireBaseService','UserService','$mdToast',function($state, md5, fireService, UserService, $mdToast){
  var th = this;
  th.users = [];
  th.username = UserService.username;
  th.email = UserService.email;
  th.password = "";
  th.error = false;

  th.toSignup = function(){
    $state.go('signup');
  };

  th.login = function(){
    fireService.login(th.email, th.password, function(err, data){
      if(err){
        //
      }else {
        angular.forEach(data, function(value){
          if(value.email === th.email
            && value.password === md5.createHash(th.password)){
              UserService.email = th.email;
              UserService.username = value.username;
              UserService.auth = true;
              $state.go('dashboard');
            }
          });
          th.toast("Invalid user or password");
        }
      });
    };


    th.toast = function(text) {
      /*
      var toast = $mdToast.simple()
      .textContent(text)
      .action('OK')
      .highlightAction(false);*/
      //alert(text);
    };

  }]);
