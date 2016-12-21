


var module=module.angular("bankingproject",[]);


module.controller("loginController" ,function($scope){
	alret("login");
	var submit={}
	
	$scope.submit=function(){
		
		alret("submitlogin")
	}
})

module.config(function($routeProvider){
	
	$routeProvider.when("/login",{controller:"loginController",templateUrl:"login.html"});
});