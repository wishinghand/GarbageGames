(function() {
    'use strict';

    angular
        .module('app')
        .controller('SignUpCtrl', SignUpCtrl);

    SignUpCtrl.$inject = ['GameFactory', 'ReviewFactory', 'UserFactory'];

    /* @ngInject */
    function SignUpCtrl(GameFactory, ReviewFactory, UserFactory) {
        var vm = this;
        vm.title = 'SignUpCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();