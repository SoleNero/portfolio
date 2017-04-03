(function() {
  'use strict';

  angular.module("app")
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state({
      name: 'app',
      abstract: true,
      component: 'app',
    })
    .state({
      name: 'home',
      parent: 'app',
      url: '/',
      component: 'homeComponent',
      data: {
        bodyClass: 'css/assets/flex_lines_background.jpg'
    }
    })
    .state({
      name:'about',
      url: '/about',
      component: 'about',
      data: {
        bodyClass: 'css/assets/wave-no-text.png'
    }
    })
    .state({
      name:'projects',    
      url: '/projects',
      component: 'projects'
    })
    .state({
      name:'contact',
      url: '/contact',
      component: 'contact'
    })
    
 }
}());