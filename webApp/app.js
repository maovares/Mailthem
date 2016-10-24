/*
wheaterStation TEC 2016
Marcos Rodríguez Ovares
AngularJS Main Configuration
*/
'use strict';

var app = angular.module('mailthemApp',[
  'ui.router',
  'ngMaterial',
  'firebase',
  'angular-md5'
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
    controllerAs:'loginCtrl',
    authenticate: false
  })
  .state('signup',{
    url:'/signup',
    templateUrl:'signup/signup.html',
    controller:'SignupController',
    controllerAs:'signupCtrl',
    authenticate: false
  })
  .state('dashboard',{
    url:'/dashboard',
    templateUrl:'dashboard/dashboard.html',
    controller:'DashboardController',
    controllerAs:'dashboardCtrl',
    authenticate: true
  })
  .state('send',{
    url:'/send',
    templateUrl:'send/send.html',
    controller:'SendController',
    controllerAs:'sendCtrl',
    authenticate: true
  })
  .state('create',{
    url:'/create',
    templateUrl:'create/create.html',
    controller:'CreateController',
    controllerAs:'createCtrl',
    authenticate: true
  });
}).run(function ($rootScope, $state, UserService) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    if (toState.authenticate && !UserService.auth){
      $state.transitionTo("login");
      event.preventDefault();
    }
    else if (toState.url === '/login') {
      UserService.auth = false;
    }
  });
});
