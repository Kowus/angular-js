(function () {
    angular
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });
	
	app.controller('PanelController', function () {
		this.tab = 1;
		
		this.selectTab = function (setTab) {
			this.tab = setTab;
		};
		
		this.isSelected = function (checkTab) {
			return this.tab === checkTab;
		}
	});
	
	
	
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Some gems have hidden qualities beyond their luster, beyond their shine.. Dodecahedron is one of those gems.',
            canPurchase: true,
            soldOut: false,
	        images: [
		        {
			        full: 'baby.jpg',
			        thumb: 'fingers.jpg'
		        },{
			        full: 'flowers.jpg',
			        thumb: 'pentax.jpg'
		        }
	        ],
	        reviews:[
		        {
			        stars: 5,
			        body: 'I love this product!',
			        author: 'joe@thomas.com'
		        },
		        {
			        stars: 1,
			        body: 'This product sucks',
			        author: 'sam@hater.org'
		        }
	        ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: ". . .",
            canPurchase: false,
	        soldOut: false
        }
    ]
})();