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

        activate();

        ////////////////

        function activate() {
        }
    }
})();