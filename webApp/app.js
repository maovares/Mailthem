/*
  wheaterStation TEC 2016
  Marcos Rodríguez Ovares
  AngularJS Main Configuration
*/
'use strict';

var app = angular.module('mailthemApp',[
  'ui.router',
  'ui.bootstrap'
])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/login');
  $urlRouterProvider.when('/', '/login');
  $urlRouterProvider.when('/home', '/login');

  $stateProvider
  .state('login',{
      url:'/login',
      templateUrl:'login/login.html',
      controller:'LoginController',
      controllerAs:'loginCtrl'
    })
    .state('signup',{
        url:'/signup',
        templateUrl:'signup/signup.html',
        controller:'SignupController',
        controllerAs:'signupCtrl'
      })
      .state('dashboard',{
          url:'/dashboard',
          templateUrl:'dashboard/dashboard.html',
          controller:'DashboardController',
          controllerAs:'dashboardCtrl'
        });
});
