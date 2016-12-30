(function () {
	angular
	var app = angular.module('store', ['store-products']);
	
	// Store Controller
	app.controller('StoreController', function () {
		this.products = gems;
	});
	
	// Review Controller
	app.controller('ReviewController', function () {
		this.review = {};
		
		this.addReview = function (product) {
			product.reviews.push(this.review);
			this.review = {};
		}
	});
	
	
	
	// Gems Database
	var gems = [
		{
			name:        'Dodecahedron',
			price:       2.95,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine.. Dodecahedron is one of those gems.',
			canPurchase: true,
			soldOut:     false,
			images:      [
				'fingers.jpg',
				'baby.jpg',
				'flowers.JPG',
				'pentax.jpg'
			],
			reviews:     [
				{
					stars:  5,
					body:   'I love this product!',
					author: 'joe@thomas.com'
				},
				{
					stars:  1,
					body:   'This product sucks',
					author: 'sam@hater.org'
				}
			]
		},
		{
			name:        'Pentagonal Gem',
			price:       5.95,
			description: "The Pentagonal Gem was created from the hairs on the Zeus himself, it is rumored to make its owners' wishes come true. The armies of the undead use this as an orb of good fortune, if it likes you well enough, it can even make you invisible",
			canPurchase: true,
			soldOut:     true,
			images:      [
				'pentax.jpg',
				'ants.jpg',
				'fingers.jpg',
				'flowers.JPG'
			],
			reviews:     [
				{
					stars:  5,
					body:   'Omg!! The Orb of Invisibility',
					author: 'joe@thomas.com'
				},
				{
					stars:  5,
					body:   'This give me butterflies',
					author: 'sam@lover.man'
				}
			]
		}
	]
})();
