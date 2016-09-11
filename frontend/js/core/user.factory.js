(function() {
    'use strict';

    angular
        .module('app')
        .factory('UserFactory', UserFactory);

    UserFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function UserFactory($http, $q) {
        var service = {
            getUser: getUser,
            postUser: postUser,
            putUser: putUser,
            deleteUser: deleteUser
        };
        return service;

        ////////////////

        function getUser() {
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

        function postUser (){
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

        function putUser(){
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

        function deleteUser(){
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