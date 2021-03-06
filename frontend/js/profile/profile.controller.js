(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ['$stateParams', '$state', 'GameFactory', 'UserFactory', 'ReviewFactory'];

    /* @ngInject */
    function ProfileCtrl($stateParams, $state, GameFactory, UserFactory, ReviewFactory) {
        //scope binding
        var vm = this;

        //data binding
        vm.title = 'ProfileCtrl';
        vm.game = {};
        vm.review = {};
        vm.user = {};

        //function bindings
        vm.getGame = getGame;
        vm.getReview = getReview;
        vm.deleteReview = deleteReview;
        vm.getUser = getUser;
        vm.putUser = putUser;
        vm.deleteUser = deleteUser;

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

        function deleteReview() {
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

        function deleteUser() {
            UserFactory.deleteUser.then(
                function() {
                  
                }
            );
        }

    }
})();