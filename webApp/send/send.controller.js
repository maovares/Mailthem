/*
  Mailthem 2016
  Marcos Rodríguez Ovares
  Send Controller
*/
'use strict';

angular.module('mailthemApp')
.controller('SendController',['$state','UserService', 'EmailService', 'CSV',
function($state, UserService, EmailService, csvService){
  var th = this;
  th.username = UserService.username;
  th.from = UserService.email;
  th.subject = '';
  th.to = '';
  th.toList = [];
  th.message = UserService.message;
  th.checkUser = true;
  th.send = '';

  th.addTo = function(){
    th.toList.push(th.to);
    th.to = '';
  };

  th.readCSV = function(url){
    try {
      //var emailsArray = csvService.csvToArry(th.file);
      //console.log(emailsArray);
      console.log(url);
    } catch (e) {
      alert("Arror reading CSV");
    }
  };

  th.send = function(){
    var toLisString = th.toList.toString();
    var fromPresentation = th.username +'  '+ th.from;
    EmailService.sendEmail(fromPresentation, toLisString, th.subject, th.message,
      function(err, info){
        if(!err.status === 200){
          alert("Email error!");
        }else {
          alert("Email send successfully!");
          th.clean();
        }
    });
  };

  th.remove = function(i){
    th.toList.splice(i, 1);
  };

  th.clean = function(){
    th.subject = '';
    th.to = '';
    th.toList = [];
    th.message = '';
  };

}]);
