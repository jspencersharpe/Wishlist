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

<<<<<<< HEAD
			function editWish(id, wish){
				var url = 'https://ssclwishlist.firebaseio.com/wishlist/' + id + '.json';
=======
			function editWish(id, wishlist){
				console.log(id, wishlist);
				var url = 'https://ssclwishlist.firebaseio.com/' + id + '.json';
<<<<<<< HEAD
>>>>>>> 6826ee4b97922bfbc63e1a1a351f8c01a321c796
				$http.put(url, wish)
=======
				$http.put(url, wishlist)
>>>>>>> cdd6d212103e867e8c746417ecbb936555d4d28b
					.success(function(data){
						console.log('edit success');
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
					.success(function(){
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



