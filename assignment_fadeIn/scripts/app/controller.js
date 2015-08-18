/**
 * Created by namratam on 18-10-2014.
 */
var appControllers = angular.module('appControllers',['appServices']);
appControllers.controller('DoctorController', function($scope,doctorService,$window) {

    $scope.doctorlist = doctorService.getDoctors();

  //  $rootScope.doctorlist=$scope.doctorlist;

    $scope.saveDoctor = function() {

        if($scope.newdoctor.id == null) {
            //if this is new doctor, add it in batches array
            // appServices.doctorlist.push($scope.newdoctor);
            doctorService.addDoctors($scope.newdoctor);

        } else {
            //for existing contact, find this contact using id
            //and update it.
            for(i in $scope.doctorlist) {
                if($scope.doctorlist[i].id == $scope.newdoctor.id) {
                    $scope.doctorlist[i] = $scope.newdoctor;
                    doctorService.doctorlist[i]=$scope.newdoctor;
                   }
            }
        }

        //clear the add contact form
        $scope.newdoctor = {};
    }

    $scope.edit = function(id) {
      $scope.newdoctor = angular.copy(doctorService.edit(id));
   //     $window.alert($scope.newdoctor.doctorname);

    }
    $scope.delete=function(id) {
        doctorService.delete(id);
        $scope.newcontact = {};
    }

});


appControllers.controller('AddPatientController', function($scope,$rootScope,doctorService,patientService,$window) {

    $scope.doctorlist=doctorService.getDoctors();
    $scope.patientlist=patientService.getPatients();

 //   $rootScope.patientlist=$scope.patientlist;
    //    $window.alert($rootScope.patientlist[0].doctorname);

    $scope.savePatient = function() {
        if($scope.newpatient.id == null) {
            //if this is new batch, add it in batches array
            var doctorname= $scope.newpatient.patientdoctor.doctorname;

            var patientname= $scope.newpatient.patientname;
            //    $window.alert("id null"+doctorname+" patientname"+patientname);
            patientService.addPatients($scope.newpatient);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for(i in $scope.patientlist) {
                if($scope.patientlist[i].id == $scope.newpatient.id) {
                    $scope.patientlist[i] = $scope.newpatient;
                    patientService.patientlist[i]=$scope.newpatient;

                }
            }
        }

        //clear the add contact form
        $scope.newpatient = {};

        //    $window.alert($rootScope.patientlist[0].patientname);

    }

});

appControllers.controller('ListDoctorPatientController', function($scope,$rootScope,patientService,doctorService,$window) {

    $scope.doctorlist=doctorService.getDoctors();

    $scope.patientlist=patientService.getPatients();

    var patientlist1 = [];
    $scope.patientlist1=patientlist1;
    $scope.listPatient = function() {

        var doctorname = $scope.newpatient.patientdoctor.doctorname;



        //  $window.alert($scope.patientlist[0].patientdoctor.doctorname);

        for(i in $scope.patientlist) {

            if($scope.patientlist[i].patientdoctor.doctorname===doctorname) {
                $scope.patientlist1.push($scope.patientlist[i]);
                //   $window.alert("patientlist1"+patientlist1[i].patientname);

            }
        }
    }

});



