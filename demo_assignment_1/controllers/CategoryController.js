window.CategoryController = function ($scope, $http) {
    $scope.categories = [];

    // apiURL = 'http://localhost:3000/categories';
    // đã khai báo window.categoryAPI trong config/api.js

    $http.get(categoryAPI + '?_embed=products').then(
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
