window.CategoryCreateController = function ($scope, $http, $location) {
    $scope.categoryName = '';
    // Hàm được gọi khi click btn submit form tạo category
    $scope.onSubmit = function () {
        $http.post(
            categoryAPI, // API url
            { name: $scope.categoryName } // dữ liệu
        ).then(
            function (response) {
                console.log(response);
                if (response.status === 201) {
                    $location.path('categories');
                }
            },
            function (errors) {
                console.log(errors);
            }
        );
    }
};
