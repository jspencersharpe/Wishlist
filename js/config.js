;(function(){
  'use strict'

  angular.module('wishApp')
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'views/table.html',
        controller: 'WishlistController',
        controllerAs: 'wishlist'
      })
      .when('/new', {
        templateUrl: 'views/form.html',
        controller: 'WishlistController',
        controllerAs: 'wishlist'
      })
      .when('/:id', {
        templateUrl: 'views/show.html',
        controller: 'ShowController',
        controllerAs: 'show'
      })
      .when('/:id/edit', {
        templateUrl: 'views/form.html',
        controller: 'EditController',
        controllerAs: 'wishlist'
      })
      .otherwise({redirectTo: '/'});
    })
}());
