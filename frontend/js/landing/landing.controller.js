(function() {
    'use strict';

    angular
        .module('app')
        .controller('LandingCtrl', LandingCtrl);

    LandingCtrl.$inject = ['GameFactory', 'ReviewFactory', 'UserFactory'];

    /* @ngInject */
    function LandingCtrl(GameFactory, ReviewFactory, UserFactory) {
        var vm = this;
        vm.title = 'LandingCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();