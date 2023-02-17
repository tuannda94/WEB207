var AddController = function ($scope, $http, $location) {
    $scope.nameInput = '';
    $scope.onSave = function () {
        $http.post(
            API_URL + '/users',
            JSON.stringify({name: $scope.nameInput})
        ).then(
            function (res) {
                $location.path('/ds-nguoi-dung');
            },
            function (err) {},
        )
    }
}
