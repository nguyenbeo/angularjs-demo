(function() {
	var app = angular.module('blog', [ 'blog-article' ]);
	
	// Moved to articles.json
	/*var articles = [
	    {
	    	"title": "Cum sociis natoque penatibus et magnis dis parturient montes",
	    	"author": "Tester 1",
	    	"content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
	    	"date": "2015-11-14",
	    	"isPublished" : true,
	    	"noOfVisits" : 1000,
	    	"comments": [
		         {
		        	 "subject": "Nice article",
		        	 "author": "Nguyen Beo",
		        	 "body": "This is an amazing article"
		         },
		         {
		        	 "subject": "Thanks for your sharing",
		        	 "author": "Nguyen Binh Nguyen",
		        	 "body": "This demo is so awesome"
		         }
	    	]
	    },
	    {
	    	"title": "Donec pede justo, fringilla vel",
	    	"author": "Tester 2",
	    	"content": "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt",
	    	"date": "2015-11-15",
	    	"isPublished" : true,
	    	"noOfVisits" : 2000
	    },
	    {
	    	"title": "Etiam rhoncus. Maecenas tempus",
	    	"author": "Tester 3",
	    	"content": "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
	    	"date": "2015-11-16",
	    	"isPublished" : true,
	    	"noOfVisits" : 3000
	    },
	    {
	    	"title": "Etiam rhoncus",
	    	"author": "Tester 4",
	    	"content": "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
	    	"date": "2015-11-16",
	    	"isPublished" : false,
	    	"noOfVisits" : 0
	    }
	];*/

	// Controllers
	// -----------
	app.controller('BlogController', function($scope) {
		$scope.currentDate = new Date();
	});
	
	// Here is using Dependency Injection to inject built-in $http service
	app.controller('PostController', ['$http', '$location', function($http, $location) {
		var post = this;
		post.articles = [ ];
		
		$http.get('articles.json').success(function(data){
			post.articles = data;
		});
	}]);
	
	app.controller('CommentController', function() {
		this.comment = {};
		
		this.addComment = function(article) {
			article.comments.push(this.comment);
			this.comment = {};
		};
	});
	// ---------------
	// Controllers End
	
})();