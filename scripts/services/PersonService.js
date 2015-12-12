(function(){
  angular.module('app').service('PersonService', function($http){
  
  var vm = this;
  
  vm.get = function(){
    return $http.get('json/PersonDetails.json')
    .success(function(res){
      return res;
    })
    .error(function(error){
      return error;
    });
  }  
});
}())