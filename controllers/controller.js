myApp.controller('MainCtrl', function($scope, $http, $log) {

  $scope.dt = new Date();
  var vm = this;
  vm.getData = function() {
    $http({method : 'GET',url : 'http://cricapi.com/api/cricket'})
    .success(function(content) {
     vm.group = content.data;
     console.log(vm.group);
     // group: content.group
    }).catch(function(error){
      $log.error('failure loading', error);
    });
  };
  vm.getData();
});

myApp.controller('SecondCtrl', function($scope, $http, $routeParams){
  
  $scope.dt = new Date();
  var vm = this;
  var id = $routeParams.uniqueID;
  console.log(id);
  vm.getData = function(id){
    $http({method: 'GET', url: 'http://cricapi.com/api/cricketScore?unique_id='+id })
    .success(function(data){
      vm.item = data;
      console.log(vm.item);
    });
  };
  vm.getData(id);
});

// myApp.service('cricService', function(){
//   this.unique_id = null;
// });