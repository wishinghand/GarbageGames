(function() {
    'use strict';

    angular
        .module('app')
        .factory('ReviewFactory', ReviewFactory);

    ReviewFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function ReviewFactory($http, $q) {
        var service = {
            getReview: getReview,
            postReview: postReview,
            putReview: putReview,
            deleteReview: deleteReview
        };
        return service;

        ////////////////

        function getReview (){

        }
        
        function postReview (){

        }
        
        function putReview (){

        }
        
        function deleteReview (){

        }
        

    }
})();