window.CategoryDetailController = function($scope, $http, $routeParams) {
    $scope.category = {};

    var id = $routeParams.id;
    var apiURL = 'http://localhost:3000/categories/' + id;
    // apiURL = `http://localhost:3000/categories/${id}`;

    $http.get(apiURL + '?_embed=products').then(
        function (response) {
            if (response.statusText = 'OK') {
                $scope.category = response.data;
            }
        },
        function (errors) {
            console.log(errors);
        }
    )
}
