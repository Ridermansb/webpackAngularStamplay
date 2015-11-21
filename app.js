Stamplay.init('webpackangularstamplay');

var angular = require('angular');

var AuthService = require('./www/components/shared/AuthService');
var LoginController = require('./www/components/home/loginController');

function registerStates($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
      .state('anon', {
          abstract: true,
          template: "<ui-view/>"
      })
      .state('anon.login', {
          url: '/',
          controller: LoginController,
          controllerAs: 'vm',
          template: require('html!./www/components/home/loginView.html')
      })
}

var uiRouter = require('angular-ui-router');

module.exports =
    angular.module('app', [uiRouter])
    .config(['$stateProvider', '$urlRouterProvider', registerStates])
    .factory('Auth', AuthService)
    .controller('LoginController', LoginController)
    ;
