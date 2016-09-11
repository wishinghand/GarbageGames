(function() {
    'use strict';

    angular
        .module('app')
        .controller('GameCtrl', GameCtrl);

    GameCtrl.$inject = ['GameFactory', 'ReviewFactory', 'UserFactory'];

    /* @ngInject */
    function GameCtrl(GameFactory, ReviewFactory, UserFactory) {
        var vm = this;
        vm.title = 'GameCtrl';
        vm.getGame = getGame;
        vm.getReview = getReview;
        vm.postReview = postReview;
        vm.deleteReview = deleteReview;
        vm.getUser = getUser;

        ////////////////

        function getGame() {
        }
    }
})();