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