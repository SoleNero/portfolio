(function(){
angular.module('app')
.component('contact', {
  templateUrl: 'js/contact/contact.template.html',
  controller: controller
});

function controller(){
  const vm = this;

  vm.$onInit = onInit;

  function onInit(){
    console.log("You're in contact.");
  }
}
}())