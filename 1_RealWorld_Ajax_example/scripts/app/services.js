var appServices = angular.module('appServices',[]);

appServices.service('appServices', function ($http) {  
    this.GetAllSpeciality = function (callback) {
		$http
        ({ 
            method: 'Get', 
            url: 'http://10.30.2.109/NGLabService/NGLabService.svc/GetAllSpeciality' 
        }).
		success(function (data, status) {
			callback(data);
		}).
		error(function (data, status) {
			alert("Error while getting Speciality");
		});        
    };

    this.GetDoctorBySpeciality = function (speciality, callback) {
        $http
        ({ 
            method: 'Get', 
            url: 'http://10.30.2.109/NGLabService/NGLabService.svc/GetDoctorBySpeciality/'+ speciality 
        }).
        success(function (data, status) {
            callback(data);
        }).
        error(function (data, status) {
            alert("Error while getting Doctor detail");
        });           
    }
});