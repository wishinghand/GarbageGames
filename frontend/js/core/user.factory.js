(function() {
    'use strict';

    angular
        .module('app')
        .factory('UserFactory', UserFactory);

    UserFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function UserFactory($http, $q) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();