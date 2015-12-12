(function(){
  angular.module('app').service('EmailService', function($http){
  
  var vm = this;
  
  vm.get = function(){
    return $http.get('json/emailQ.json')
    .success(function(res){
      return res;
    })
    .error(function(error){
      return error;
    });
  }
  
  vm.post = function(data){
    return $http.post('data.json',data)
    .then(function(res){
      return res;
    });
  }
  
  
});
}())