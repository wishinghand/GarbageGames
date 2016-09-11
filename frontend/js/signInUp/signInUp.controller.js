(function() {
    'use strict';

    angular
        .module('app')
        .controller('SignInCtrl', SignInCtrl);

    SignInCtrl.$inject = ['UserFactory'];

    /* @ngInject */
    function SignInCtrl(UserFactory) {
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