var ListController = function ($scope, $http) {
    $scope.api = 'https://63e5fb6483c0e85a868a560d.mockapi.io/';
    $scope.title = "Danh sách người dùng";
    $scope.nguoi_dung = [];
    $scope.isLoading = true;
    // 1. Call API đã định nghĩa ở trang mockAPI.io
    // $http sẽ có những phương thức như get, post, put... để call API
    $http.get($scope.api + 'users').then(
        function (res) {
            if (res.status == 200) {
                $scope.isLoading = false;
                $scope.nguoi_dung = res.data;
            }
        }, // khi chờ dữ liệu thành công
        function (err) {
            console.log(err);
        } // khi chờ dữ liệu nhưng thất bại
    )

    // 2. gán giá trị đã nhận được cho $scope
    // 3. Ở view sẽ nhận giá trị và hiển thị

}
