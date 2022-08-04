window.CategoryCreateController = function (
    $scope, $http, $location, $routeParams
) {
    // Vẫn tiến hành khởi tạo giá trị mặc định cho categoryName bên input
    $scope.categoryName = '';

    // Kết hợp chức năng sửa category
    var id = $routeParams.id;
    if (id) {
        // Nếu có id thì là edit, mới call API lấy chi tiết
        // $http.get('http://localhost:3000/categories/1')
        $http.get(`${categoryAPI}/${id}`).then(
            function(response) {
                if (response.status === 200) {
                    // response.data = {id: xxx, name: "YYYY"};
                    // Gán lại giá trị cho input hiển thị sửa
                    $scope.categoryName = response.data.name;
                }
            },
            function (errors) {
                console.log(errors);
            }
        );

    }

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
