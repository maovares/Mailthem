/*
  Mailthem 2016
  Marcos Rodríguez Ovares
  Firebase Service
*/
'use strict';

angular.module('mailthemApp')
.service('FireBaseService',function($firebaseObject, $firebaseArray){
  var th = this;

  th.login = function(username, password, callback){
    try{
      var personList = [];
      var rootRef = firebase.database().ref('/person');
      var syncObject = $firebaseArray(rootRef);
      syncObject.$loaded().then(function(data){
        angular.forEach(data, function (value) {
          personList.push({username: value.username, email: value.email, password:value.password});
        });
        callback(false, personList);
      });
    }catch(err){
      callback(true, null);
    }
  };


    th.signup = function(username, email, password, callback){
      try {
        var data={'username' : username, 'email':email, 'password': password};
        var updates = {};
        updates['/person/' + username] = data;
        firebase.database().ref().update(updates);
        callback(false,'signup ok');
      }
      catch(err) {
          callback(true, 'signup bad');
      }
    };
});
