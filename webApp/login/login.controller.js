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
        var loginResult = loginProcess(data, th.email, th.password);
        if(loginResult.result){
          UserService.email = th.email;
          UserService.username = loginResult.username;
          UserService.templates = loginResult.templates;
          UserService.auth = true;
          $state.go('dashboard');
        }else{
          th.toast("Invalid user or password");
          alert("Invalid user or password");
        }
      }
    });
  };


  var loginProcess = function(array, email, password){
    for (var i = 0; i < array.length; i++) {
      if(array[i].email === email
        && array[i].password === md5.createHash(password)){
          return {'result':true, 'username':array[i].username,'templates':array[i].templates};
        }
      };
      return {'result':false, 'username':null, 'templates':null};
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
