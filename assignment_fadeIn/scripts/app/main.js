/**
 * Created by namratam on 18-10-2014.
 */

//Define an angular module for our app
var sampleApp = angular.module('sampleApp',[
    'appControllers',
    'appServices'

]);

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
        when('/CreateDoctor', {
            templateUrl: 'template/create_doctor.html',
            controller: 'DoctorController'
        }).
        when('/AddPatient', {
            templateUrl: 'template/add_patient.html',
            controller: 'AddPatientController'
        }).
        when('/ListDoctorPatient', {
            templateUrl: 'template/list_doctor_patients.html',
            controller: 'ListDoctorPatientController'
        }).
        otherwise({
            redirectTo: '/CreateDoctor'
        });
    }]);






