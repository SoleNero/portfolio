(function(){
 angular.module('app')
  .component('homeComponent', {
    templateUrl: 'js/home/home.template.html',
    controller: controller
  });

      controller.inject = ['$state'];


  function controller($state){
    const vm = this;

    vm.$onInit = onInit;

    function onInit(){
    }

  }
}())