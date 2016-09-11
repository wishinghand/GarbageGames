(function() {
    'use strict';

    angular
        .module('app')
        .controller('SignInCtrl', SignInCtrl);

    SignInCtrl.$inject = ['$stateParams', '$state', 'GameFactory', 'UserFactory', 'ReviewFactory'];

    /* @ngInject */
    function SignInCtrl($stateParams, $state, GameFactory, UserFactory, ReviewFactory) {
        //scope binding
        var vm = this;

        //data binding
        vm.title = 'SignInCtrl';

        //function bindings
        vm.postUser = postUser;

        ////////////////

        function postUser() {
            UserFactory.postUser.then(
                function() {
                  
                }
            );
        }
    }
})();