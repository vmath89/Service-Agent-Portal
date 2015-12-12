(function(){
  angular.module('app')
  .controller('DashboardCtrl', DashboardCtrl);
  
  function DashboardCtrl(CallService, EmailService, PersonService){

  var vm = this;  
  vm.name = 'World';
  vm.result_call;
  vm.result_email;
  vm.result_person;
  vm.nameSelected ;
  vm.counter;
  vm.issueTitle;
  vm.issueSummary;
  vm.followupDate;
  vm.followupTime;
  vm.num = 0;
  vm.tab = 2;
  vm.tabMain = 1;
 
   vm.call_get = function(){
    CallService.get()
      .success(function(res){
        vm.result_call = res.call;
        vm.nameSelected = vm.result_call[0].name;
        vm.person_get(vm.nameSelected);
      })
      .error(function(err){
      });
  }
  vm.post = function(msg){
    CallService.post({message: msg})
      .success(function(result){
        console.log(result);
      })
      .error(function(err){
        console.log(err);
      });
  }

  vm.email_get = function(){
    EmailService.get()
      .success(function(res){
        vm.result_email = res.email;
      })
      .error(function(err){
      });
  }
  
  
  vm.person_get = function(person){
    PersonService.get()
      .success(function(res){
        vm.result_person = res.persons;
        vm.nameSelected = person;
        vm.getCounter();        
      })
      .error(function(err){
      });
  }
  
  vm.getCounter = function(){
    
    for(counter = 0; counter < vm.result_person.length; counter++){
      if(vm.nameSelected === vm.result_person[counter].name){
        vm.num = counter;
        
      }
    }
    
  }
  vm.selectTab = function(setTab){
      vm.tab = setTab;
    };
    vm.isSelected = function(checkTab){
      return vm.tab === checkTab;
    }

    
    vm.selectTabMain = function(setTabMain){
      vm.tabMain = setTabMain;
    };
    vm.isSelectedMain = function(checkTabMain){
      return vm.tabMain === checkTabMain;
    }

    vm.issue = function(){
      vm.issueTitle = '';
      vm.issueSummary = '';
      alert("Issue Saved");
    };

    
    vm.followup = function(){
      
      vm.followupDate = '';
      vm.followupTime = '';
      alert("followup Saved");
    }
  
  
  vm.post("hello");
  vm.call_get();
  vm.email_get();
};
}())