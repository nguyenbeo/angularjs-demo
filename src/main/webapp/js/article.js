(function(){
	var app = angular.module('blog-article', [ ]);
	
	// Custom directives
	// -----------------
	app.directive('articleTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'article-title.html'
		};
	});
	
	app.directive('articlePanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'article-panels.html',
			controller: function() {
				this.tab = 1;
				
				this.selectTab = function(setTab) {
					this.tab = setTab;
				};
				
				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				}
			},
			controllerAs: 'panel'
		};
	});
})();