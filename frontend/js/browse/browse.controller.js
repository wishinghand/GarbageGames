(function() {
    'use strict';

    angular
        .module('app')
        .controller('BrowseCtrl', BrowseCtrl);

    BrowseCtrl.$inject = ['GameFactory', 'ReviewFactory', 'UserFactory'];

    /* @ngInject */
    function BrowseCtrl(GameFactory, ReviewFactory, UserFactory) {
        var vm = this;
        vm.title = 'BrowseCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();