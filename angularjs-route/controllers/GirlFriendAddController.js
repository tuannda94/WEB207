// GirlFriendAddController.js
var GirlFriendAddController = function ($scope, $http, $location) {
    $scope.inputs = {
        ten: '',
        tuoi: 0
    };

    $scope.onSave = function () {
        $http.post(API_NY, $scope.inputs).then(
            function (res) {$location.path('/quan-ly')},
            function (err) {}
        )
    }
}
