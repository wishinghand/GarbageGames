(function() {
    'use strict';

    angular
        .module('app')
        .factory('GameFactory', GameFactory);

    GameFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function GameFactory($http, $q) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();