var myApp = angular.module('englishClass', ['ngRoute']);

myApp.config(function($routeProvider) {

    $routeProvider.when('/home', {
        templateUrl: "templates/home.html",
        controller: "homeController"
    });
    $routeProvider.when('/info', {
        templateUrl: "templates/info.html"
    });

    $routeProvider.when('/vocabularyone', {
        templateUrl: "templates/vocabularyone.html",
        controller: "vocabularyController"
    });
    $routeProvider.when('/indexvocabulary', {
        templateUrl: "templates/indexvocabulary.html",
        controller: "vocabularyController"

    });
    $routeProvider.when('/indextheory', {
        templateUrl: "templates/indextheory.html",

    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });

});

myApp.controller('vocabularyController', function($scope, $http) {
    $scope.vocabulary = "Vocabulary";
    $scope.inicializar = function() {
        $http.get('./json/vocabulary.json').
        success(function(datos) {
            $scope.cardsVocabulary = datos;
        });
    };
    $scope.inicializar();
});

myApp.controller('homeController', function($scope) {
    $scope.mensaje = "Texto home";
});

myApp.controller('menuController', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };

});
