(function() {
    'use strict';

    angular
        .module('app')
        .factory('ReviewFactory', ReviewFactory);

    ReviewFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function ReviewFactory($http, $q) {
        //no PUT because we don't want people editing their review
        var service = {
            getReview: getReview,
            postReview: postReview,
            deleteReview: deleteReview
        };
        return service;

        ////////////////

        function getReview (){
            var defer = $q.defer();
            
            $http.get(apiUrl + 'review').then(
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
        
        function postReview (){
            var defer = $q.defer();
            
            $http.post(apiUrl + 'review',  data).then(
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
        
        function deleteReview (){
            var defer = $q.defer();
            
            $http.delete(apiUrl + 'review').then(
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