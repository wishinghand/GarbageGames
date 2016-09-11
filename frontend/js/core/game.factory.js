(function() {
    'use strict';

    angular
        .module('app')
        .factory('GameFactory', GameFactory);

    GameFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function GameFactory($http, $q) {
        var service = {
            getGame: getGame,
            postGame: postGame,
            putGame: putGame,
            deleteGame: deleteGame
        };
        return service;

        ////////////////

        function getGame() {
            var defer = $q.defer();
            
            $http.get(apiUrl + 'endpoint').then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    console.log(error);
                    defer.reject(error);
                }
            );
            
            return defer.promise;
        }

        function postGame() {
            var defer = $q.defer();
            
            $http.post(apiUrl + 'endpoint',  data).then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    console.log(error);
                    defer.reject(error);
                }
            );
            
            return defer.promise;
        }

        function putGame() {
            var defer = $q.defer();
            
            $http.put(apiUrl + 'endpoint', data).then(
                function(response) {
                    defer.resolve();
                },
                function(error) {
                    console.log(error);
                    defer.reject(error);
                }
            );
            
            return defer.promise;
        }

        function deleteGame() {
            var defer = $q.defer();
            
            $http.delete(apiUrl + 'endpoint').then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    console.log(error);
                    defer.reject(error);
                }
            );
            
            return defer.promise;
        }

        
    }
})();