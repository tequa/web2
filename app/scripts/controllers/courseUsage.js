'use strict';

/**
 * @ngdoc service
 * @name jupiterApp.Player
 * @description
 * # Player
 * Service in the jupiterApp.
 */
angular.module('coretechsApp')
  .controller('CourseUsageCtrl', function($scope) {

  	// TODO: move data to the service
        $scope.CourseUsageData = [ {key: 'Mobile', y: 5264}, { key: 'Desktop', y: 3872} ];
      //  $scope.storageChartData = [{key: 'System', y: 126560}, {key: 'Other', y: 224365 }];

        $scope.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 180,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(0, 150, 136)', '#E75753'],
                showLabels: false,
                showLegend: false,
                title: 'Over 9K',
                margin: { top: -10 }
            }
        };

  });