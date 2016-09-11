(function() {
    'use strict';

    angular
        .module('app')
        .controller('ReviewCtrl', ReviewCtrl);

    ProfileCtrl.$inject = ['$stateParams', '$state', 'GameFactory', 'UserFactory', 'ReviewFactory'];

    /* @ngInject */
    function ProfileCtrl($stateParams, $state, GameFactory, UserFactory, ReviewFactory) {
        //scope binding
        var vm = this;

        //data binding
        vm.title = 'ReviewCtrl';
        vm.game = {};
        vm.review = {};
        vm.user = {};

        //function bindings
        vm.getGame = getGame;
        vm.getReview = getReview;
        vm.postReview = postReview;
        vm.getUser = getUser;

        ////////////////

        function getGame() {
            GameFactory.getGame.then(
                function(game) {
                    vm.game = game;
                }
            );
        }

        function getReview() {
            ReviewFactory.getReview.then(
                function(review) {
                    vm.review = review;
                }
            );
        }

        function postReview() {
            ReviewFactory.deleteReview.then(
                function() {
                  
                }
            );
        }

        function getUser() {
            UserFactory.getUser.then(
                function(user) {
                    vm.user = user;
                }
            );
        }

        function putUser() {
            UserFactory.putUser.then(
                function() {
                  
                }
            );
        }
    }
})();