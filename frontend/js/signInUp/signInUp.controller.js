(function() {
    'use strict';

    angular
        .module('app')
        .controller('SignInCtrl', SignInCtrl);

    SignInCtrl.$inject = ['GameFactory', 'ReviewFactory', 'UserFactory'];

    /* @ngInject */
    function SignInCtrl(GameFactory, ReviewFactory, UserFactory) {
        var vm = this;
        vm.title = 'SignInCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();