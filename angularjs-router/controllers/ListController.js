var ListController = function ($scope, $http, $location) {
    $scope.api = 'http://localhost:3000';
    $scope.title = "Danh sách người dùng";
    $scope.nguoi_dung = [];
    $scope.isLoading = true;
    // Định nghĩa sẵn 1 hàm lấy dữ liệu mới nhất
    $scope.onGetList = function () {
        $http.get($scope.api + '/users').then(
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
        $http.delete($scope.api + '/users/' + deleteId)
        .then(
            function (res) {
                onGetList();
            },
            function (err) {}
        )
    };

    $scope.onEdit = function (editId) {
        $scope.editItem = null;
        $http.get(API_URL + '/users/' + editId)
        .then(
            function (res) {
                console.log(res);
                $scope.editItem = res.data;
                $location.path('/add', $scope.editItem);
            },
            function (err) {}
        )
    };

    // 1. Call API đã định nghĩa ở trang mockAPI.io
    // $http sẽ có những phương thức như get, post, put... để call API
    $scope.onGetList();



}
