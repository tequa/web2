'use strict';

/**
 * @ngdoc service
 * @name jupiterApp.Player
 * @description
 * # Player
 * Service in the jupiterApp.
 */
angular.module('coretechsApp')
  .controller('RatingCtrl', function($scope) {

    // TODO: move data to the service
      //  var vm = this;

        // TODO: move data to the service
        $scope.ratingsChartData = ratingFunction;

        function ratingFunction() {
            var sin = [];
            for (var i = 0; i < 100; i++) {
                sin.push({x: i, y: Math.abs(Math.cos(i/10) *0.25*i + 0.9 - 0.4*i)});
            }
            return [ { values: sin, color: 'rgb(0, 150, 136)', area: true } ];
        }

        $scope.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 180,
                margin: { top: -10, left: -20, right: -20 },
                x: function (d) { return d.x },
                y: function (d) { return d.y },
                showLabels: false,
                showLegend: false,
                title: 'Over 9K',
                showYAxis: false,
                showXAxis: false,
                tooltip: { contentGenerator: function (d) { return '<span class="custom-tooltip">' + Math.round(d.point.y) + '</span>' } }
            }
        };
    
  });