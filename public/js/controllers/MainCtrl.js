angular.module('MainCtrl', []).controller('MainController', ['$scope','$location', function($scope, $location) {

	$scope.tagline = 'Put a large wedding photo here.';
	$scope.isLoggedIn = false;
	$scope.isLoginModalVisible = false;
	$scope.username;

	$scope.toggleLoginModal = function(){
		$scope.isLoginModalVisible = !$scope.isLoginModalVisible;
	};

	$scope.validateLogin = function(formValidity) {
		$scope.usernameErrorMessage = "";
		$scope.passwordErrorMessage = "";
		$scope.errorMessage = "";

		validUsernames = ["jonathanlimsc", "ericliu", "vpoornima", "karthik"];
		validPasswords = ["nvcrocks"];
		username = $scope.usernameString;
		password = $scope.passwordString;
		if(!username){
			console.log('invalid username');
			$scope.usernameErrorMessage = "Username cannot be blank.";
		}
		if(!password){
			console.log('invalid password');
			$scope.passwordErrorMessage = "Password cannot be blank.";
		}
		if (username && password) {
			if (validUsernames.includes(username) && validPasswords.includes(password)){
				console.log("Login successful!");
				$scope.isLoggedIn = true;
				$scope.username = username;
				//$location.path('/');

			} else {
				$scope.errorMessage = "Username or password is invalid."
			}
		}
	};

	$scope.navigateTo = function(target){
		switch (target) {
			case 'signup':
				//$location.path('/signup');
				window.location.href = '/signup';
				break;
			default :
				window.location.href = '/';
		}
	};

}]);