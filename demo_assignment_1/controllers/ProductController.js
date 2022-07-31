window.ProductController = function ($scope, $http) {
    // Dữ liệu mặc định cho products
    $scope.products = [];
    // Tương tác với API http://localhost:3000/products
    $apiURL = 'http://localhost:3000/products';

    // 1 product lấy thêm 1 category theo categoryId _expand=category
    $http.get($apiURL + '?_expand=category').then(
        function (response) {
            // Nếu lấy kq thành công thì vào đây
            if (response.statusText === 'OK') {
                $scope.products = response.data;
            }
        },
        function (errors) {
            // Nếu lấy kq thất bại thì vào đây
            console.log(errors);
        }
    )
};
