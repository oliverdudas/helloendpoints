var app = angular.module('oloendpoints', [

    'ui.router',
    'angular-google-gapi',
    'home'

]);

app.run(['GAuth', 'GApi', '$state', '$rootScope', '$window',
    function (GAuth, GApi, $state, $rootScope, $window) {

        var CLIENT = '155971558786-8onak2kteln59cn5p49t9ji6t5np6c7i.apps.googleusercontent.com';
        var BASE;
        if ($window.location.hostname == 'localhost') {
            BASE = '//localhost:8080/_ah/api';
        } else {
            BASE = 'https://oloendpoints.appspot.com/_ah/api';
        }

        GApi.load('helloworld', 'v1', BASE);
        GAuth.setClient(CLIENT);
        GAuth.setScope('https://www.googleapis.com/auth/userinfo.email');
    }
]);

app.config(['$urlRouterProvider', function ($urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
}]);

var home = angular.module('home', []);

home.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        views: {
            '': {
                controller: 'HomeController',
                templateUrl: 'js/app/app.tpl.html'
            }
        }
    })

}]);

home.controller('HomeController', ['$scope', 'GApi', function homeCtl($scope, GApi) {

    $scope.value = 'Wait for it! ;)';

    $scope.greeting = function () {
        GApi.execute('helloworld', 'greetings.listGreeting').then(function (resp) {
            $scope.value = resp.items[toggle()].message;
        }, function () {
            console.log("error :(");
        });
    };

    this.actualIndex = 0;

    var toggle = function () {
        if (this.actualIndex === 0) {
            this.actualIndex = 1;
        } else {
            this.actualIndex = 0;
        }
        return this.actualIndex;
    };

}
]);