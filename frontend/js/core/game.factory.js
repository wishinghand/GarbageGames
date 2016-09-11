(function() {
    'use strict';

    angular
        .module('app')
        .factory('GameFactory', GameFactory);

    GameFactory.$inject = ['$http', '$q', 'apiUrl'];

    /* @ngInject */
    function GameFactory($http, $q, apiUrl) {
        //no DELETE because once it's in DB we want to keep it
        var service = {
            getGame: getGame,
            getGameByName: getGameByName,
            postGame: postGame,
            putGame: putGame
        };
        return service;

        ////////////////

        function getGame(game) {
            var defer = $q.defer();
            
            $http.get(apiUrl + 'game?search=' + game).then(
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

        function getGameByName(gameName){
            var defer = $q.defer();
            
            $http.get(apiUrl + gameName + '/exists').then(
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
            
            $http.post(apiUrl + 'game',  data).then(
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
            
            $http.put(apiUrl + 'game', data).then(
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
    }
})();