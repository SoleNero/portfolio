(function(){
  'use strict';
  
  angular.module('app')
    .component('projects', {
      templateUrl: 'js/projects/projects.template.html',
      controller: controller
    });

    function controller (){
      const vm = this;

      vm.$onInit = onInit;
      vm.setItem = setItem;

      function onInit(){
        vm.item_info = 2;
      }

      function setItem (number) {
        vm.item_info = number;
      }
    }

}());