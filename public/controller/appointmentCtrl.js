
var scheduleApp = angular.module("scheduleApp", ["ngStorage"]);

scheduleApp.controller("appointmentCtrl", function ($scope, $element, $window, $http) {
    //Get data from parent page
    
        ParentScope = $window.opener.ScopeToShare;
        $scope.name = ParentScope.name;
        $scope.phone = ParentScope.phone;
    

    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.
    $scope.close = function (name, phone) {
        $window.close({
            name: $scope.name,
            phone: $scope.phone
        }, 500); // close, but give 500ms for bootstrap to animate
    };

    //  This cancel function must use the bootstrap, 'modal' function because
    //  the doesn't have the 'data-dismiss' attribute.
    $scope.cancel = function () {

        //  Manually hide the modal.
        $element.modal('hide');

        //  Now call close, returning control to the caller.
        $window.close({
            name: $scope.name,
            phone: $scope.phone
        }, 500); // close, but give 500ms for bootstrap to animate
    };



    //$scope.save = function (name, phone) {
    //    $window.ScopeToShare = $scope;
    //    $window.opener.location.reload();
    //};

    $http.get('../appointment.json').success(function (data) {
        $scope.appointments = data;
    });

    $scope.addAppointment = function () {

        $scope.bla = "sijs";
        $scope.appointments.push({date: $scope.date,time: $scope.time,name: $scope.name,phone: $scope.phone,status: $scope.status
        });


        var dataObj = {
            date: $scope.date,
            time: $scope.time,
            name: $scope.name,
            phone: $scope.phone,
            status: $scope.status
        };
        var res = $http.post('../appointment.json', dataObj);
        res.success(function (data, status, headers, config) {
            $scope.message = data;
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });

    }




});