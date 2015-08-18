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
    otherwise({
        redirectTo : '#'
    });
}]);
