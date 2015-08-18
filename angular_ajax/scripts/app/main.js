var myApp = angular.module('myApp', [
    'ngRoute',
    'appServices',
    'appControllers'
]);
myApp.config(['$routeProvider', function ($routeProvider){
    $routeProvider.when('/getDocs/:speciality',{
        templateUrl : 'templates/docs.html',
        controller : 'GetDocsController'
    }).
    when('/book/:speciality/:regNo',{
        templateUrl : '/templates/appointment.html',
        controller : 'BookController'
    }).
    when('/add',{
        templateUrl : '/templates/addedit.html',
        controller : 'AddEditDocController'
    }).
    when('/edit/:speciality/:regNo',{
        templateUrl : '/templates/addedit.html',
        controller : 'AddEditDocController'
    }).
    when('/details/:speciality/:regNo',{
        templateUrl : '/templates/details.html',
        controller : 'BookController'
    }).
    otherwise({
        redirectTo : '#'
    });
}]);
