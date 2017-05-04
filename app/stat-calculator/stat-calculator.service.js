angular.module("StatCalculator")

    .service("StatCalculatorService", function (HTTPService) {
        this.basicMainStats = [
            {
                "label": "HP",
                "value": 1
            },
            {
                "label": "ATK",
                "value": 2
            },
            {
                "label": "DEF",
                "value": 3
            },
            {
                "label": "REC",
                "value": 4
            }
        ];

        this.getSquareMainStat = function () {
            var squareMainStat = angular.copy(this.basicMainStats);
            var res = {
                "label": "RES",
                "value": 5
            };
            squareMainStat.push(res);
            return squareMainStat;
        };

        this.getFlatHPGems = function () {
            return HTTPService.get("/get-flat-hp-gem", null);
        };
    });
