(function() {
    'use strict';

    angular
        .module('app')
        .controller('BrowseCtrl', BrowseCtrl);

    BrowseCtrl.$inject = ['GameFactory', 'ReviewFactory'];

    /* @ngInject */
    function BrowseCtrl(GameFactory, ReviewFactory) {
        var vm = this;
        vm.title = 'BrowseCtrl';
        vm.postGames = postGames;
        vm.getReviews = getReviews;

        ////////////////

        function postGames() {
        }

        function getReviews() {
            
        }
    }
})();