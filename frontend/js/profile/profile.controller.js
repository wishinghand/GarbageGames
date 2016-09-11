(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ['GameFactory', 'ReviewFactory', 'UserFactory'];

    /* @ngInject */
    function ProfileCtrl(GameFactory, ReviewFactory, UserFactory) {
        var vm = this;
        vm.title = 'ProfileCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();