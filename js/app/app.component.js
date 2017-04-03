(function(){
  'use strict';

  angular.module('app')
    .component('app', {
      templateUrl: 'js/app/app.template.html',
      controller: controller
    });
    
    controller.inject = ['$state'];

    function controller($state){
      const vm = this;

      vm.$onInit = onInit;

      function onInit(){
        
      }
    }
}());