myApp.controller('MainCtrl', function($scope, $http, cricService) {

  $scope.dt = new Date();
  // var vm = this;
  $scope.getData = function() {
   $http({method : 'GET',url : 'http://cricapi.com/api/cricket'})
   .success(function(data) {
     $scope.group = data;
     console.log($scope.group);
   });
  };
  $scope.getData();

  $scope.cricFn = function(id){
    cricService.unique_id = id;
  };
});

myApp.controller('SecondCtrl', function($scope, cricService, $http){
  
  $scope.dt = new Date();
  $scope.unique_id = cricService.unique_id;
  console.log($scope.unique_id);
  $scope.getData = function(id){
    $http({method: 'GET', url: 'http://cricapi.com/api/cricketScore?unique_id='+id})
    .success(function(data){
      $scope.item = data;
      console.log($scope.item);
    });
  };
  $scope.getData($scope.unique_id);
});

myApp.service('cricService', function(){
  this.unique_id = null;
});