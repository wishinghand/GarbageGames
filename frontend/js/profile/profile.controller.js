(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ['GameFactory', 'ReviewFactory', 'UserFactory'];

    /* @ngInject */
    function ProfileCtrl(GameFactory, ReviewFactory, UserFactory) {
        var vm = this;
        vm.title = 'ProfileCtrl';
        vm.getGame = getGame;
        vm.getReview = getReview;
        vm.deleteReview = deleteReview;
        vm.getUser = getUser;
        vm.putUser = putUser;
        vm.deleteUser = deleteUser;
        
        ////////////////

        function getGame() {
        }
    }
})();