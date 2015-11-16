(function() {
	var app = angular.module('blog', [ ]);
	
	var articles = [
	    {
	    	"title": "Cum sociis natoque penatibus et magnis dis parturient montes",
	    	"author": "Tester 1",
	    	"content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
	    	"date": "2015-11-14",
	    	"isPublished" : true
	    },
	    {
	    	"title": "Donec pede justo, fringilla vel",
	    	"author": "Tester 2",
	    	"content": "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt",
	    	"date": "2015-11-15",
	    	"isPublished" : true
	    },
	    {
	    	"title": "Etiam rhoncus. Maecenas tempus",
	    	"author": "Tester 3",
	    	"content": "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
	    	"date": "2015-11-16",
	    	"isPublished" : true
	    },
	    {
	    	"title": "Etiam rhoncus",
	    	"author": "Tester 4",
	    	"content": "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
	    	"date": "2015-11-16",
	    	"isPublished" : false
	    }
	];

	app.controller('BlogController', function($scope) {
		$scope.currentDate = new Date();
	});
	
	app.controller('PostController', function() {
		this.articles = articles;
	});
})();