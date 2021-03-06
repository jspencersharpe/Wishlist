;(function(){
	'use strict';

	angular.module('wishApp')
		.factory('wishlistFactory', function($http, $location){

			function getWish(id, cb){
				var url = 'https://ssclwishlist.firebaseio.com/' + id + '.json';

				$http.get(url)
					.success(function(data){
						cb(data);
					})
					.error(function(data){
						console.log(err);
					});
				}

      function editWish(id, wishlist){
				var url = 'https://ssclwishlist.firebaseio.com/' + id + '.json';
				$http.put(url, wishlist)
					.success(function(data){
						$location.path('/');
					})
					.error(function(err){
						console.log(err);
					});
			 }

			function getAllWishes(cb){
				$http.get('https://ssclwishlist.firebaseio.com/.json')
					.success(function(data){
						cb(data);
					})
					.error(function(err){
						console.log(err);
					});
			  }

			function createWish(wish, cb){
				$http.post('https://ssclwishlist.firebaseio.com/.json', wish)
					.success(function(data){
						cb(data);
					})
					.error(function(err){
						console.log(err);
					});
			}

			function deleteWish(wishId, cb){
				var url = 'https://ssclwishlist.firebaseio.com/' + wishId + '.json';
					$http.delete(url)
					.success(function(){
						cb();
					})
					.error(function(err){
						console.log(err);
					});
			}

			var priorityOptions = {
				high: 'High',
				medium: 'Medium',
				low: 'Low',
				reallybad: 'No thanks'
			};

			return {
				getWish: getWish,
				editWish: editWish,
				getAllWishes: getAllWishes,
				createWish: createWish,
				deleteWish: deleteWish,
				priorityOptions: priorityOptions
			};
		})
}());



