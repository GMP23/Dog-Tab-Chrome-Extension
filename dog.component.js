/*
file: dog.component.js
author: garret patten
*/

(function() {
  'use strict';
  angular
    .module('dog_app')
    .component('dogBreed'), {
      templateUrl: 'url',
      controllerAs: 'ctrl',
      bindings: {
      },
      controller: function() {
        var ctrl = this;
        ctrl.variable = '';
        ctrl.$onInit = function () {

        }
      }
    }
})
