angular.module("MSLStatCalculatorApp")

    .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);

        var stateHome = {
            "name": "home",
            "url": "/home",
            "templateUrl": "./views/stat-calculator.html",
            "controller": "StatCalculatorController"
        };

        var stateAbout = {
            "name": "about",
            "url": "/about",
            "templateUrl": "./views/about.html"
        };

        $urlRouterProvider.otherwise("/home");
        $stateProvider.state(stateHome);
        $stateProvider.state(stateAbout);
    });
