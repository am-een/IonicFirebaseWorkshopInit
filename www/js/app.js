// Ionic Starter App
var fbRef = new Firebase('https://moviesdevcamp.firebaseio.com/');
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('MoviesApp', ['ionic','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider,$urlRouterProvider) {
  $stateProvider
      .state('signin',{
        url:'/signin',
        templateUrl:'views/signin.html',
        controller:'SigninCtrl'
      })
      .state('signup',{
        url:'/signup',
        templateUrl:'views/signup.html',
        controller:'SignupCtrl'
      })
      .state('mymovies',{
        url:'/mymovies',
        templateUrl:'views/mymovies.html',
        controller:'MoviesCtrl'
      });
  $urlRouterProvider.otherwise('signin');
})



.controller('SigninCtrl',function ($scope,$firebaseAuth,$state) {
  $scope.u = {};
  $scope.signin = function () {
    //TODO: sign in
  }
})

.controller('SignupCtrl',function ($scope,$firebaseAuth,$state) {
  $scope.u = {};
  $scope.signup = function () {
    //TODO: signup
  }
})

.controller('MoviesCtrl',function ($scope,$ionicModal,$firebaseArray,$firebaseAuth,$state) {

  //TODO: Create AddModal and Edit Modal

  $scope.movies = [
    {
      "description" : "He made it! Leo got his Oscar!",
      "name" : "The revenant",
      "state" : 1,
      "uid":"776c30bc-05d5-47d5-bc6c-2f53c69c39c9",
      "year" : 2015
    },{
      "description" : "Justice has a new Face!",
      "name" : "Deadpool",
      "state" : 0,
      "uid":"776c30bc-05d5-47d5-bc6c-2f53c69c39c9",
      "year" : 2016
    }
  ];

  $scope.m = {};

  $scope.getAuth = function () {
    return $firebaseAuth(fbRef).$getAuth().uid;
  }
  $scope.add = function () {
    //TODO: State: 0 - Waiting ~ 1 - Done
  //TODO: insert movie in database
  }
  $scope.delete = function (movie) {
    //TODO: remove movie
  }
  $scope.openEdit = function (movie) {
    $scope.m = movie;
    $scope.editModal.show();
  }
  $scope.edit = function () {
    //TODO: edit movie
  }
  $scope.changeState = function (movie) {
    if(movie.state === 0){
      movie.state = 1;
    }else{
      movie.state = 0;
    }
    //TODO: update movie in DB
  }
  $scope.logout = function () {
    $firebaseAuth(fbRef).$unauth();
    $state.go('signin');
  }
})
