var appControllers = angular.module('appControllers', []);//['appServices']);

appControllers.controller('MenuController', ['$scope', '$http', 'appServices', function ($scope, $http, appServices) {
    appServices.GetAllSpeciality(function (data) {
          $scope.types = data;
    });
}]);

appControllers.controller('GetDocsController', ['$scope', '$routeParams', '$http', 'appServices', function ($scope, $routeParams, $http, appServices) {
    $scope.speciality = $routeParams.speciality;
    appServices.GetDoctorBySpeciality($routeParams.speciality, function (data) {
          $scope.doctors = data;
    });    
}]);

