(function(angular) {
	angular.module('accordion-app', ['ngAnimate'])
	.controller('AppCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
		$scope.vm = {
			list: [{
				id: 0,
			}, {
				id: 1,
			}, {
				id: 2,
			}, {
				id: 3,
			}, {
				id: 4,
			}, {
				id: 5,
			}, {
				id: 6,
			}, {
				id: 7,
			}, {
				id: 8,
			}, {
				id: 9,
			}, {
				id: 10,
			}, {
				id: 11,
			}],
			select: {
				id: null
			},
			open: [false, false, false]
		};

		$scope.click = function(index) {
			var show = Math.ceil((index+1)/4)-1;

			// 如果该层描述窗口未打开，则打开
			if(!$scope.vm.open[show]) {
				$scope.vm.open[show] = !$scope.vm.open[show];

				// 延迟绑定数据
				$timeout(function() {
					$scope.vm.select.id = index;
				}, 180);
			} else {
				$scope.vm.select.id = index;
			}

			// 关闭其他层描述窗口
			$scope.vm.open.map(function(item, index) {
				if(index !== show) {
					$scope.vm.open[index] = false;
				}
			});
		}
	}])

})(angular);