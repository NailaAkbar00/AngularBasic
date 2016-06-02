angular.module('myApp')
.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    
//    $urlRouterProvider.otherwise('main');
    
    $stateProvider
    .state('myApp',{
        abstract:true,
        templateUrl:'main.html'
    })
    
    .state('myApp.home',{
      //  abstract : true,
        url:'/home',
        templateUrl : 'home.html'
    })
    
    .state('myApp.user', {
        url :'/user',
        templateUrl:'users.html'
    })
    
     .state('myApp.snippet', {
        url :'/snippet',
        templateUrl:'snippet.html'
    })
    
     .state('myApp.actor', {
        url :'/actor',
        templateUrl:'actor.html'
    })
}]);
