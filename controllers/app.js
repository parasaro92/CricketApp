var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'templates/menu.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })

  .when('/score/:uniqueID', {
    // url: '/score',
    templateUrl: 'templates/score.html',
    controller: 'SecondCtrl',
    controllerAs: 'info'
  });
  // $urlRouterProvider.otherwise('/');
});