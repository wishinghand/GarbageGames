(function() {
    'use strict';

    angular
        .module('app')
        .controller('LandingCtrl', LandingCtrl);

    LandingCtrl.$inject = ['$stateParams', '$state', 'GameFactory', 'UserFactory', 'ReviewFactory'];


    /* @ngInject */

    function LandingCtrl($stateParams, $state, GameFactory, UserFactory, ReviewFactory) {
     724a7accd542a648f562f551153195414c23c47b
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

        function getGame(game) {
            GameFactory.getGame(game).then(
                function(games) {
                    vm.games = games;
                }
            );
        }

        function getUser() {
            UserFactory.getUser().then(
                function(user) {
                    vm.user = user;
                }
            );
        }

        function postUser() {
            UserFactory.postUser().then(
                function() {
                  
                }
            );
        }
    }
})();