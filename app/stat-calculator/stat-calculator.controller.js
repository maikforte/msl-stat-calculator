angular.module("StatCalculator")

    .controller("StatCalculatorController", function ($scope) {})

    .controller("GemSocketController", function ($scope, $mdDialog) {

        $scope.showAddGemSquare = function (event) {
            $mdDialog.show({
                controller: "AddGemSquareController",
                templateUrl: "./views/template/add-gem-square.tmpl.html",
                parent: null,
                targetEvent: event,
                clickOutsideToClose: true,
                fullscreen: false
            });
        }

    })

    .controller("AddGemSquareController", function ($scope, $mdDialog) {
        $scope.star = 3;

        $scope.updateStar = function (value) {
            $scope.star += value;
            if ($scope.star > 6) {
                $scope.star = 6;
            } else if ($scope.star < 1) {
                $scope.star = 1;
            }
        };

        $scope.close = function () {
            $mdDialog.cancel();
        };

    });
