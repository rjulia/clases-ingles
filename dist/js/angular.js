var myApp = angular.module('englishClass', []);

myApp.controller('vocabularyController', function($scope, $http) {
	$scope.vocabulary = "Vocabulary";
    $scope.inicializar = function () {
        $http.get('./json/vocabulary.json').
        success(function (datos) {
            $scope.cardsVocabulary = datos;
        });
    };
    $scope.inicializar();
});
