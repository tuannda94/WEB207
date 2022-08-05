window.CategoryCreateController = function (
    $scope, $http, $location, $routeParams
) {
    // Vẫn tiến hành khởi tạo giá trị mặc định cho categoryName bên input
    $scope.categoryName = '';
    $scope.imageUrl = '';

    $scope.onChangeImage = function ($event) {
        // console.log($event.target.files); // có thể upload nhiều file nên files là 1 mảng
        var file = $event.target.files[0]; // nếu upload 1 ảnh thì lấy file ở vị trí 0
        var reader = new FileReader(); // sử dụng đối tượng FileReader của JS để đọc file
        reader.readAsDataURL(file); // truyền file vào để đọc
        reader.onload = function () { // khi bắt đầu đọc sẽ gán kết quả đọc cho imageUrl
            $scope.imageUrl = reader.result;
        }
    }

    // Kết hợp chức năng sửa category
    var id = $routeParams.id;
    if (id) {
        // Nếu có id thì là edit, mới call API lấy chi tiết
        // $http.get('http://localhost:3000/categories/1')
        $http.get(`${categoryAPI}/${id}`).then(
            function(response) {
                if (response.status === 200) {
                    console.log(response);
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
        if (id) {
            return $http.put(
                `${categoryAPI}/${id}`,
                { name: $scope.categoryName}
            ).then(
                function(response) {
                    if (response.status === 200) {
                        $location.path('categories');
                    }
                },
                function(errors) {
                    console.log(errors);
                }
            )
        }

        $http.post(
            categoryAPI, // API url
            { name: $scope.categoryName, imageUrl: $scope.imageUrl } // dữ liệu
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
