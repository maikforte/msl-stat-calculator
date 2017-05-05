angular.module("StatCalculator")

    .service("StatCalculatorService", function (HTTPService) {

        this.getSquareMainStat = function () {
            return HTTPService.get("/get-square-main-stat", null);
        };

        this.getFlatHPGems = function () {
            return HTTPService.get("/get-flat-hp-gem", null);
        };

        this.getPercentGems = function () {
            return HTTPService.get("/get-percent-hp-gem", null);
        }
    });
