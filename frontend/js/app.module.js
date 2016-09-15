(function() {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .value('apiUrl', 'http://localhost:3000/api/')
        .config(appConfig);

    appConfig.$inject= ['$urlRouterProvider', '$stateProvider'];


    	function appConfig($urlRouterProvider, $stateProvider){
    		$urlRouterProvider.otherwise('landing');

    		$stateProvider
    			.state('404', {
                    url: '/404', 
                    // controller: "404Ctrl as fourohfour",
                    templateUrl: 'js/404/404.html'
                })
                .state('browse', {
                    url: '/browse', 
                    controller: "BrowseCtrl as browse",
                    templateUrl: 'js/browse/browse.html'
                })
                .state('game', {
                    url: '/game/:gameName', 
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
                .state('signInUp', {
                    url: '/signInUp', 
                    controller: "SignInUpCtrl as signInUp",
                    templateUrl: 'js/signInUp/signInUp.html'
                })
                .state('review', {
                    url: '/review',
                    controller: "ReviewCtrl as review",
                    templateUrl: 'js/Review/review.html'
                });
	   }
})();