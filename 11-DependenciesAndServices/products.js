(function () {
	var app = angular.module('store-products', []);
	// Product Title Directive the hyphen-naming convention in html is replaced with camelcase
	app.directive('productTitle', function () {
		// Return A Configuration to define how the directive will work
		return {
			// restrict specifies the type of directive, E means element
			restrict:    'E',
			templateUrl: 'product-title.html'
			// Url of a Template
		};
	});
	
	/*
		* Product Panels Directive
		* Sets the tab to display corresponding contents
		* eg. Description tag will display the associated information when clicked
	* */
	app.directive('productPanels', function () {
		return {
			restrict:     'E',
			templateUrl:  'product-panels.html',
			controller:   function () {
				this.tab = 1;
				
				this.selectTab = function (setTab) {
					this.tab = setTab;
				};
				
				this.isSelected = function (checkTab) {
					return this.tab === checkTab;
				}
			},
			controllerAs: 'panel'
		};
	});
	
	/*
		* Display images. Main image sits in a container
		* When you click the other smaller images, they are displayed in the main container
		* 
	 */
	app.directive('imageGallery', function () {
		return {
			restrict:        'E',
			templateUrl:     'image-gallery.html',
			controller:      function () {
				this.current = 0;
				this.setCurrent = function (newGallery) {
					this.current = newGallery || 0;
				};
			}, 
			controllerAs: 'gallery'
		};
		
	});
	
	
	
	
})();
