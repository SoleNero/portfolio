(function () {
  angular.module('app')
    .component('about', {
      templateUrl: 'js/about/about.template.html',
      controller: controller
    })

    controller.inject= ['NgMap'];

  function controller(NgMap) {
    const vm = this;

    vm.$onInit = onInit;


    function onInit() {
      NgMap.getMap().then(function (map) {
        vm.map = map;
      });

      
    }
  }
}());