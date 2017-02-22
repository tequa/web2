angular.module('coretechsApp')
  .controller('ComponentViewCtrl', ['$scope', '$http', 'Hvb', function ($scope, $http, Hvb)  {
//	  $scope.component = '';
	  $scope.componentData = '';
	  $scope.Hvb = Hvb;
	  
//	  $scope.viewMode = 'chart'; // chart
//	  $scope.viewModeIcon = 'insert_chart';
//	  $scope.toggleViewMode = function() {
//	    if ($scope.viewMode == 'chart') {
//	      $scope.viewMode = 'table';
//	      $scope.viewModeIcon = 'grid_on';
//	    } else {
//	      $scope.viewMode = 'chart';
//	      $scope.viewModeIcon = 'insert_chart';
//	    }
//	  };
	  
//	  setCurrentItem($scope.item);
	  
//	  alert($scope.item)
//	  $scope.componentData = Hvb.getComponentViewData($scope.item);
//	  setCurrentItem($scope.item);
	  
//	  alert(Hvb.selectedItem);
//	  
//	  $scope.componentData = Hvb.getComponentViewData(Hvb.selectedItem);
	  
//	  $scope.setCurrentItem = function(item) {
////		  alert('Hi');
////		  $scope.title=item;
//		  $scope.componentData = Hvb.getComponentViewData(item);
////		  alert($scope.componentData)
//	  };
//	  
//	  setCurrentItem(Hvb.selectedItem);
	  
	  $scope.options = $scope.componentData['chartOptions'];
	  $scope.data = $scope.componentData['chartData'];
	 
	 
	  
	  $scope.items = [
	    {
	    name: 'Outcome',
	    score: 25.37,
	    weight: 40.0
	    }, {
	    name: 'Survey',
	    score: 13.68,
	    weight: 60.0
	  }];
	  

  }]);