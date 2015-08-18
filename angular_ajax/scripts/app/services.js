var appServices = angular.module('appServices',[]);

appServices.service('appServices', function ($http) {
    var specialities = [
    ];
    var refNo = 0;
    var patients = [];
    var docs = [
        {
            "regNo" : "1",
            "name" : "ABC",
            "speciality" : "Heart",
            "address" : "abc adddress",
            "visitHrs" : "10",
            "tel" : "xxx-xxxx"
        },
        {
            "regNo" : "2",
            "name" : "PQR",
            "speciality" : "Skin",
            "address" : "pqr address" ,
            "visitHrs" : "20" ,
            "tel" : "yyy-yyyy"
        }
    ];
    var regNo = 2;
    
    this.getMenu = function (callback) {
		$http({ method: 'Get', url: 'http://10.30.2.109/NGLabService/NGLabService.svc/GetAllSpeciality' }).
		success(function (data, status) {
			callback(data);
		}).
		error(function (data, status) {
			//$log.warn(data,status);
		});
        //return specialities;
    };
    
    this.book = function (patient) {
        patient.refNo = ++refNo;
        patients.push(patient);
    };
    
    this.listPatients = function () {
        return patients;
    };
    
    this.listDocs = function () {
        return docs;
    };
    
    this.listDocsBySpeciality = function (speciality) {
        var subListDocs = [];
		//TODO: once add doctor added in rest this will work
		// $http({ method: 'Get', url: 'http://10.30.2.109/NGLabService/NGLabService.svc/GetDoctorBySpeciality/'+speciality }).
			// success(function (data, status) {
				// subListDocs=data;
			// }).
			// error(function (data, status) {
				// //$log.warn(data,status);
			// });
        for ( i in docs ) {
           if ( docs[i].speciality == speciality ) {
                console.log(docs[i]);
                subListDocs.push(docs[i]);
				
           }
        }
        console.log(subListDocs);
        return subListDocs;
    }
    
    this.addDoc = function (doc) {
        doc.regNo = ++regNo;		
		//TODO: add method in rest service
		$http({ method: 'POST', url: 'http://10.30.2.109/NGLabService/NGLabService.svc/AddDoctor',data:JSON.stringify(doc) }).
		success(function (data, status) {
			
		}).
		error(function (data, status) {
			//$log.warn(data,status);
		});
        docs.push(doc);
    };
    
    this.getDoc = function (regNo) {
        for ( i in docs) {
            if ( docs[i].regNo == regNo) {
                return docs[i];
            }
        }
    }
    
    this.editDoc = function (doc) {
        for (i in docs) {
            if ( docs[i].regNo == doc.regNo) {
				$http({ method: 'POST', url: 'http://10.30.2.109/NGLabService/NGLabService.svc/EditDoctor',data:JSON.stringify(doc) }).
				success(function (data, status) {
					
				}).
				error(function (data, status) {
					//$log.warn(data,status);
				});
                docs[i] = doc;
            }
        }
    }
} );