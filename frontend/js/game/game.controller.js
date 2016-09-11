(function() {
    'use strict';

    angular
        .module('app')
        .controller('GameCtrl', GameCtrl);

    GameCtrl.$inject = ['$stateParams', '$state', 'GameFactory', 'UserFactory', 'ReviewFactory'];

    /* @ngInject */

    function GameCtrl($stateParams, $state, GameFactory, UserFactory, ReviewFactory) {
        //scope binding
        var vm = this;

        //data binding
        vm.title = 'GameCtrl';
        vm.game = {};
        vm.review = {};
        vm.gameName = '';

        //function bindings
        vm.getReview = getReview;
        vm.postReview = postReview;
        vm.deleteReview = deleteReview;
        vm.getUser = getUser;

        ////////////////

        getGame();

        function getGame() {
            vm.gameName = $stateParams.gameName;
            GameFactory.getGameByName(vm.gameName).then(
                function(game) {
                    vm.gameDetails = game;
                }
            );
        }

        function getReview() {
            ReviewFactory.getReview().then(
                function(review) {
                    vm.review = review;
                }
            );
        }

        function postReview() {
            ReviewFactory.postReview().then(
                function() {
                  
                }
            );
        }

        function deleteReview() {
            ReviewFactory.deleteReview.then(
                function() {
                  
                }
            );
        }

        function getUser() {
            UserFactory.getUser.then(
                function() {
                  
                }
            );
        }
    }
})();