var scheduleApp = angular.module("scheduleApp", []);
scheduleApp.factory('dataFactory',
    ['$http', '$state',
        function ($http, $state) {
            var dataFactory = {};
            dataFactory.getName = function () {
                return JSON.parse(sessionStorage.getItem('name'));
            };

            dataFactory.saveName = function (name) {
                sessionStorage.setItem('name', JSON.stringify(name));

            };
            dataFactory.getPhone = function () {
                return JSON.parse(sessionStorage.getItem('phone'));
            };

            dataFactory.savePhone = function (phone) {
                sessionStorage.setItem('phone', JSON.stringify(phone));

            };
     }]);