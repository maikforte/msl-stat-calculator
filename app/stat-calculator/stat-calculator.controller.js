angular.module("StatCalculator")

    .controller("StatCalculatorController", function ($scope) {
        $scope.astromonStar = 3;

        $scope.updateAstromonStar = function (value) {
            $scope.astromonStar += value;
            if ($scope.astromonStar > 6) {
                $scope.astromonStar = 6;
            } else if ($scope.astromonStar < 1) {
                $scope.astromonStar = 1;
            }
        };
    })

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

    .controller("AddGemSquareController", function ($scope, $mdDialog, StatCalculatorService) {
        $scope.init = function () {
            $scope.star = 3;
            $scope.upgrade = 0;
            $scope.mainStatList = StatCalculatorService.getSquareMainStat();
            $scope.selectedStatIndex = 0;
            $scope.mainStat = $scope.mainStatList[$scope.selectedStatIndex];
            $scope.setBaseStat($scope.star, $scope.upgrade);
        };

        $scope.updateStar = function (value) {
            $scope.star += value;
            if ($scope.star > 6) {
                $scope.star = 6;
            } else if ($scope.star < 1) {
                $scope.star = 1;
            }
        };

        $scope.updateUpgrade = function (value) {
            $scope.upgrade += value;
            if ($scope.upgrade > 15) {
                $scope.upgrade = 15;
            } else if ($scope.upgrade < 0) {
                $scope.upgrade = 0;
            }
        };

        $scope.setBaseStat = function (star, upgrade) {
            switch ($scope.mainStat.value) {
                case 1:
                    $scope.calculateBaseStatHP(star, upgrade);
                    break;
            }
        };

        $scope.calculateBaseStatHP = function (star, upgrade) {

            StatCalculatorService.getFlatHPGems().then(function (successResponse) {
                for (var i = 0; i < successResponse.data.length; i++) {
                    if (successResponse.data[i].star == star) {
                        $scope.mainStat.stat = successResponse.data[i].base + (successResponse.data[i].increment * upgrade);
                        break;
                    }
                }
            }, function (errorResponse) {

            });
        };

        $scope.selectMainStat = function (value) {
            $scope.selectedStatIndex += value;
            if ($scope.selectedStatIndex > $scope.mainStatList.length - 1) {
                $scope.selectedStatIndex = 0;
            } else if ($scope.selectedStatIndex < 0) {
                $scope.selectedStatIndex = $scope.mainStatList.length - 1;
            }
            $scope.mainStat = $scope.mainStatList[$scope.selectedStatIndex];
        };

        $scope.init();

        $scope.close = function () {
            $mdDialog.cancel();
        };

    });
