var ListController = function ($scope, $http, $location) {
    $scope.title = "Danh sách người dùng";
    $scope.nguoi_dung = [];
    $scope.isLoading = true;
    // Định nghĩa sẵn 1 hàm lấy dữ liệu mới nhất
    $scope.onGetList = function () {
        $http.get(API_URL + '/users').then(
            function (res) {
                if (res.status == 200) {
                    $scope.isLoading = false;
                    $scope.nguoi_dung = res.data;
                }
            }, // khi chờ dữ liệu thành công
            function (err) {
                console.log(err);
            } // khi chờ dữ liệu nhưng thất bại
        );
    };
    $scope.onDelete = function (deleteId) {
        // method delete http://localhost:3000/users/1
        $http.delete(API_URL + '/users/' + deleteId)
        .then(
            function (res) {
                onGetList();
            },
            function (err) {}
        )
    };

    // $scope.onEdit = function (editId) {
    //     // 2 cách
    //     // 1. Lấy bản ghi trước, sau đó truyền sang màn chỉnh sửa -> Không ổn

    //     // 2. Truyền id qua đường dẫn ở màn chỉnh sửa, rồi mới lấy bản ghi bên đó
    //     $location.path('/edit/' + editId);

    // };

    // 1. Call API đã định nghĩa ở trang mockAPI.io
    // $http sẽ có những phương thức như get, post, put... để call API
    $scope.onGetList();



}
