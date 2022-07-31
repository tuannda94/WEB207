window.CategoryController = function ($scope, $http) {
    $scope.categories = [];

    $apiURL = 'http://localhost:3000/categories';
    $http.get($apiURL + '?_embed=products').then(
        function (response) {
            if (response.statusText = 'OK') {
                $scope.categories = response.data;
            }
        },
        function (errors) {
            console.log(errors);
        }
    )
}
