(function() {
    'use strict';

    angular
        .module('app')
        .controller('LandingCtrl', LandingCtrl);

    LandingCtrl.$inject = ['GameFactory', 'UserFactory'];

    /* @ngInject */
    function LandingCtrl(GameFactory, UserFactory) {
        var vm = this;
        vm.title = 'LandingCtrl';
        vm.getGame = getGame;
        vm.getUser = getUser;
        vm.postUser = postUser;

        ////////////////

        function getGame() {
        }
    }
})();