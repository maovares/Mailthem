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
    fireService.login(th.email, th.password, function(err, data){
      if(err){
        //
      }else {
        var loginResult = loginProcess(data, th.email, th.password);
            if(loginResult.result){
                alert("This email already exist, please use another email!");
            }else{
              fireService.signup(th.username, th.email, md5Password,
                function(err, message){
                  if(err){
                      alert("Signup error, try other user and email");
                  }else {
                      $state.go('login');
                  }
              });
            }
        }
      });

      var loginProcess = function(array, email, password){
        for (var i = 0; i < array.length; i++) {
          if(array[i].email === email){
              return {'result':true, 'templates':array[i].templates};
            }
        };
        return {'result':false, 'templates':null};
      };


  };

}]);
