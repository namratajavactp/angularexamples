/**
 * Created by namratam on 18-10-2014.
 */
var appServices = angular.module('appServices',[]);
appServices.service('doctorService', function () {
    var id = 0;
    var doctorlist = [
        { id:0, 'doctorname': 'Dr. Pradhan',
        'doctorcat':'Heart',
        'doctorweekdays': 'sat,sun'
        }
    ];
    this.getDoctors = function () {
        return doctorlist;
    };

    this.addDoctors = function (doctor) {
        doctor.id = ++id;
        doctorlist.push(doctor);
    };


    this.delete = function(id) {

        //search contact with given id and delete it
        for(i in doctorlist) {
            if(doctorlist[i].id == id) {
                doctorlist.splice(i,1);

            }
        }

    };


    this.edit = function(id) {
        //search contact with given id and update it
        for(i in doctorlist) {
            if(doctorlist[i].id == id) {
                //we use angular.copy() method to create
                //copy of original object
              //  $scope.newcontact = angular.copy($scope.contacts[i]);
                return doctorlist[i];
            }
        }
    };

});

appServices.service('patientService', function () {
    var id = 0;
    var patientlist = [
        { id:0, 'patientname': 'Rohit Tawde',
            'patientcat':'Heart',
            'patientdoctor':{ id:0, 'doctorname': 'Dr. Pradhan',
                                    'doctorcat':'Heart',
                                    'doctorweekdays': 'sat,sun'
                            }
        }
    ];
    this.getPatients = function () {
        return patientlist;
    };

    this.addPatients = function (patient) {
        patient.id = ++id;
        patientlist.push(patient);
    };


});