(function() {
    'use strict';

    angular
        .module('app')
        .controller('BrowseCtrl', BrowseCtrl);

    BrowseCtrl.$inject = ['$stateParams', '$state', 'GameFactory', 'UserFactory', 'ReviewFactory'];

    /* @ngInject */
<<<<<<< HEAD
    function BrowseCtrl($stateParams) {
=======
    function BrowseCtrl($stateParams, $state, GameFactory, UserFactory, ReviewFactory) {
>>>>>>> 724a7accd542a648f562f551153195414c23c47b
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