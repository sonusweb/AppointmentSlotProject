var scheduleApp = angular.module("scheduleApp", []);
scheduleApp.controller("scheduleCtrl",['$scope', '$http',  '$window',
            function ($scope, $http,  $window) {
                    $scope.date = new Date();
                    $scope.appointments = [];
                    $scope.name = '';
                    $scope.phone = '';
                    $http.get('appointment.json').success(function (data) {
                        $scope.appointments = data;
                    });

                    $scope.openWindow = function (name,phone) {
                        $scope.name = name;
                        $scope.phone = phone;
                        $window.ScopeToShare = $scope;
                        $window.open('../view/addAppointment.html', "width=400,height=400");
                    };

               
        //$uibModal.open({
        //    animation: $scope.animationsEnabled,
        //    templateUrl: '/view/schedulePopup.html',
        //    controller: 'schedulePopupModal',
        //    backdrop: false,
        //    keyboard: false,
        //    size: 'lg',
        //    resolve: {
        //        //patientID: function () {
        //        //    return patientID;
        //        //}
        //    }
        //});
      
}]);