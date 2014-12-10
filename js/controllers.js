;(function(){
  'use strict';

  angular.module('wishApp')
    .controller('ShowController', function($routeParams, wishlistFactory){
      var vm = this;
      var id = $routeParams.id;
      wishlistFactory.getWish(id, function(data){
        vm.wish = data;
      });
    })
    .controller('EditController', function($routeParams, wishlistFactory){
      var vm = this;
      var id = $routeParams.id;

      wishlistFactory.getWish(id, function(data){
        vm.newWish = data;
      });

      vm.addNewWish = function(){
        wishlistFactory.editWish(id, vm.newWish);
      };

      vm.priorityOptions = wishlistFactory.priorityOptions;

    })
    .controller('WishController', function($http, wishlistFactory){
      var vm = this;

      wishlistFactory.getAllWishes(function(data){
        vm.wishes = data;
      });

      vm.addNewWish = function(){
        wishlistFactory.createWish(vm.newWish, function(data){
          vm.wishes[data.name] = vm.newWish;
          vm.newWish = _freshWish();
        });
      };

      vm.removeWish = function(wishId){
        wishlistFactory.deleteWish(wishId, function(){
          delete vm.wishes[wishId];
        });
      };

      vm.newWish = _freshWish();

      vm.priorityOptions = wishlistFactory.priorityOptions;

      function _freshWish(){
        return {
          priority: 'high'
        };
      }

    });

}());
