(function(){
  angular.module('app').service('CallService', function($http){
  
  var vm = this;
  
  vm.get = function(){
    return $http.get('json/callQ.json')
    .success(function(res){
      return res;
    })
    .error(function(error){
      return error;
    });
  }
  
  vm.post = function(data){
    return $http.post('json/callQ.json',data)
    .success(function(res){
      return res;
    })
    .error(function(error){
      return error;
    });
  }
  
  
});
}())