(function(){
  
  angular.module('app')
    .config(function($routeProvider){
      $routeProvider.when('/dashboard',
      {
        templateUrl: 'views/home.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dash',
      })
      .when('/',
      {
        redirectTo: "/dashboard",
      })
      .when('/schedule',
      {
        templateUrl: 'views/schedule.html',
      })      
      .when('/profile',
      {
        templateUrl: 'views/profile.html',
      })
      .when('/support',
      {
        templateUrl: 'views/support.html',
      })            

    });
}())