(function() {
    'use strict';

    angular
        .module('app')
        .controller('LandingCtrl', LandingCtrl);

    LandingCtrl.$inject = ['GameFactory', 'UserFactory'];

    /* @ngInject */
    function LandingCtrl($stateParams) {
        //scope binding
        var vm = this;

        //data binding
        vm.title = 'LandingCtrl';
        vm.games = [];
        vm.game = {};
        vm.user = {};

        //function bindings
        vm.getGame = getGame;
        vm.getUser = getUser;
        vm.postUser = postUser;

        ////////////////

        function getGame() {
            GameFactory.getGame.then(
                function(game) {
                    vm.game = game;
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

        function postUser() {
            UserFactory.postUser.then(
                function() {
                  
                }
            );
        }
    }
})();