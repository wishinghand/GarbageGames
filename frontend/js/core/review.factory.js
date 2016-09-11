(function() {
    'use strict';

    angular
        .module('app')
        .factory('ReviewFactory', ReviewFactory);

    ReviewFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function ReviewFactory($http, $q) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();