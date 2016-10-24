/*
Mailthem 2016
Marcos Rodríguez Ovares
Server Main Controller
*/
'use strict';

var mailer = require('nodemailer');
var marketingEmail = 'your_user_here%40gmail.com';
var password = 'your_password_here';
var transport = mailer.createTransport('smtps://'+marketingEmail+':'+password+'@smtp.gmail.com');

exports.sendEmail = function(request, response){
  var eFrom = request.params.eFrom;
  var eToList = request.params.eToList;
  var eSubject = request.params.eSubject;
  var eText = request.params.eText;
  transport.sendMail({
    from: eFrom, // sender address
    to: eToList, // list of receivers
    subject: eSubject, // Subject line
    text: "", // plaintext body
    html: '<div>'+ eText +'</div>' // html body
  }, function(err, info){
    response.json({'err':err,'info': info});
  });
};
