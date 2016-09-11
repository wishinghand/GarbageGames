(function() {
    'use strict';

    angular
        .module('app')
        .controller('SignInCtrl', SignInCtrl);

    SignInCtrl.$inject = ['UserFactory'];

    /* @ngInject */
    function SignInCtrl(UserFactory) {
        var vm = this;
        vm.title = 'SignInCtrl';
        vm.postUser = postUser;

        ////////////////

        function postUser() {
        }
    }
})();