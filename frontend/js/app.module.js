(function() {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(appConfig);

    appConfig.$inject= ['$urlRouterProvider', '$stateProvider']

    	function appConfig($urlRouterProvider, $stateProvider){
    		$urlRouterProvider.otherwise('landing');

    		$stateProvider
    			.state('landing')
    	}
})();