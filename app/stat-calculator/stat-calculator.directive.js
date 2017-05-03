angular.module("StatCalculator")

    .directive("gemSocket", function () {
        return {
            "templateUrl": "./views/template/gem-socket.tmpl.html"
        };
    })

    .directive("gemSquare", function () {
        return {
            "templateUrl": "./views/template/gem-square.tmpl.html"
        }
    })

    .directive("gemTriangle", function () {
        return {
            "templateUrl": "./views/template/gem-triangle.tmpl.html"
        }
    })

    .directive("gemDiamond", function () {
        return {
            "templateUrl": "./views/template/gem-diamond.tmpl.html"
        }
    });
