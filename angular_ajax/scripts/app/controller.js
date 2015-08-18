var appControllers = angular.module('appControllers', []);//['appServices']);

appControllers.controller('MenuController', ['$scope', '$http', 'appServices', function ($scope, $http, appServices) {
    /*$http.get('json/menu.json').success(function (data) {
        $scope.types = data;
    });*/
    appServices.getMenu(function (data) {
          $scope.types = data;
    });
}]);

appControllers.controller('GetDocsController', ['$scope', '$routeParams', '$http', 'appServices', function ($scope, $routeParams, $http, appServices) {
    $scope.speciality = $routeParams.speciality;
    // For RESTful calls - should be moved to seperate service
    /*$http.get('json/' + angular.lowercase($scope.speciality) + '.json').success(function (data) {
        $scope.doctors = data;
    });*/
    $scope.doctors = appServices.listDocsBySpeciality($scope.speciality);
}]);

appControllers.controller('BookController', [ '$scope', '$routeParams', '$http', 'appServices', function ($scope, $routeParams, $http, appServices) {
    $scope.speciality = $routeParams.speciality;
    $scope.regNo = $routeParams.regNo;
    //Hard-coding single patient data
    /*$http.get('json/'+angular.lowercase($scope.speciality)+'.json').success(function(data) {
        $scope.doctors = data;
    });*/
    var docObj = {
        "regNo" : "1",
        "name" : "ABC",
        "address" : "abc adddress",
        "visitHrs" : "10",
        "tel" : "xxx-xxxx"
    };
    $scope.doctor = docObj;
    $scope.patients = appServices.listPatients();
    $scope.saveAppointment = function () {
        appServices.book($scope.newpatient);
        $scope.newpatient = {};
    };
}]);

appControllers.controller('AddEditDocController', [ '$scope', '$routeParams', '$http', 'appServices', function ($scope, $routeParams, $http, appServices) {
    $scope.types = appServices.getMenu();
    if ($routeParams && $routeParams.speciality) {
        $scope.type = "Edit";
        $scope.newdoc = appServices.getDoc($routeParams.regNo);
        console.dir($scope.newdoc);
        console.log("before::"+$scope.newdoc.speciality);
    } else {
        $scope.type = "Add";
    }
    
    $scope.update = function () {
        console.log($scope.newdoc.speciality);
        if ($scope.type == "Add") {
            console.log("Add Doc:::"+$scope.newdoc);
            console.dir($scope.newdoc);
            appServices.addDoc($scope.newdoc);
        } else {
            console.log("Edit Doc:::"+$scope.newdoc);
            console.dir($scope.newdoc);
            appServices.editDoc($scope.newdoc);
        }
        
        $scope.newdoc = {};
    };
}]);

/*appControllers.controller('BookAppController', [ '$scope','appServices', function ($scope, appServices) {
    $scope.saveAppointment = function () {
        appServices.book($scope.newpatient);
        $scope.newpatient = {};
    }; 
}]);*/