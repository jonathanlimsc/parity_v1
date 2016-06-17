angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})

		.when('/howitworks', {
				templateUrl: 'views/howitworks.html',
				controller: 'HowItWorksController'
		})

		.when('/browse', {
			templateUrl: 'views/browse.html',
			controller: 'BrowseController'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})

		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'SignUpController'
		})

		.when('/profile/ericliu',{
			templateUrl: 'views/ericliu.html',
			controller: 'ProfileController'
		})

		.when('/profile/jasonchu',{
			templateUrl: 'views/jasonchu.html',
			controller: 'ProfileController'
		})

		.when('/package/ericliu-fun-shoot',{
			templateUrl: 'views/package-fun-shoot.html',
			controller: 'PackageController'
		})
	;

	$locationProvider.html5Mode(true);

}]);