window.CategoryDetailController = function($scope, $http, $routeParams) {
    $scope.category = {};

    var id = $routeParams.id;
    // var apiURL = 'http://localhost:3000/categories/' + id;
    // apiURL = `http://localhost:3000/categories/${id}`;
    // var url = categoryAPI + '/' + id + '?_embed=products';
    var url = `${categoryAPI}/${id}?_embed=products`;

    $http.get(url).then(
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
