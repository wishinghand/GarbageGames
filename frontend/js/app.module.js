(function() {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(appConfig);

    appConfig.$inject= ['$urlRouterProvider', '$stateProvider'];

    	function appConfig($urlRouterProvider, $stateProvider){
    		$urlRouterProvider.otherwise('landing');

    		$stateProvider
    			.state('404', {
                    url: '/404', 
                    controller: "404Ctrl as fourohfour",
                    templateUrl: 'js/landing/landing.html'
                })
                .state('browse', {
                    url: '/browse', 
                    controller: "BrowseCtrl as browse",
                    templateUrl: 'js/browse/browse.html'
                })
                .state('game', {
                    url: '/game', 
                    controller: "GameCtrl as game",
                    templateUrl: 'js/game/game.html'
                })
                .state('landing', {
                    url: '/landing', 
                    controller: "LandingCtrl as landing",
                    templateUrl: 'js/landing/landing.html'
                })
                .state('profile', {
                    url: '/profile', 
                    controller: "ProfileCtrl as profile",
                    templateUrl: 'js/profile/profile.html'
                })
                .state('signIn', {
                    url: '/signIn', 
                    controller: "SignInCtrl as signIn",
                    templateUrl: 'js/signIn/signIn.html'
                })
                .state('signUp/', {
                    url: '/signUp', 
                    controller: "SignUpCtrl as signUp",
                    templateUrl: 'js/signUp/signUp.html'
                });
    	}
})();