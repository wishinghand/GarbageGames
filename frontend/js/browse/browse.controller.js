(function() {
    'use strict';

    angular
        .module('app')
        .controller('BrowseCtrl', BrowseCtrl);

    BrowseCtrl.$inject = ['GameFactory', 'ReviewFactory'];

    /* @ngInject */
    function BrowseCtrl($stateParams) {
        //scope binding
        var vm = this;

        //data binding
        vm.title = 'BrowseCtrl';
        vm.reviews = {};

        //function bindings
        vm.postGames = postGames;
        vm.getReviews = getReviews;

        ////////////////

        function postGames() {
            GameFactory.postGame.then(
                function() {
                 //
                }
            );
        }

        function getReviews() {
            ReviewFactory.getReviews.then(
                function(reviews) {
                    vm.reviews = reviews;
                }
            );
        }
    }
})();