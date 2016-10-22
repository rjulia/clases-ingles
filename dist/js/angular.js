var myApp = angular.module('englishClass', []);

myApp.controller('vocabularyController', function($scope) {
	$scope.vocabulary = "Vocabulary";
    $scope.cardsVocabulary = [{
        'title': 'Selfish',
        'description': 'Selfish people think about themselves and not about other people',
        'synonyns': {
            'one': 'egotistical',
            'two': 'greedy',
            'three': 'narcissistic'

        },

        'antonyms': {
            'one': 'benevolent',
            'two': 'unselfish',
            'three': 'caring'

        }
    }, {
        'title': 'Zelfish',
        'description': 'Selfish people think about themselves and not about other people',
        'synonyns': {
            'one': 'egotistical',
            'two': 'greedy',
            'three': 'narcissistic'

        },

        'antonyms': {
            'one': 'benevolent',
            'two': 'unselfish',
            'three': 'caring'

        }
    }, {
        'title': 'Aelfish',
        'description': 'Selfish people think about themselves and not about other people',
        'synonyns': {
            'one': 'egotistical',
            'two': 'greedy',
            'three': 'narcissistic'

        },

        'antonyms': {
            'one': 'benevolent',
            'two': 'unselfish',
            'three': 'caring'

        }
    }];
});
