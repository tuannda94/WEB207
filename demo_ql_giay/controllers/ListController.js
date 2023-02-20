var ListController = function ($scope, $http) {
    $scope.title = 'Trang Quản lý giày';
    $scope.list_shoes = [];

    // Phần nào không cần sử dụng ở giao diện thì k cần đưa
    // vào $scope
    function onGetList () {
        $http.get(API_SHOES).then(
            function (res) {
                $scope.list_shoes = res.data;
            },
            function (err) {console.log(err)}
        );
    };
    // Lấy danh sách bằng cách gọi trực tiếp hàm onGetList
    onGetList();

    $scope.onDelete = function (deleteId) {
        var isConfirm = window.confirm('Do you want to delete?');

        if (isConfirm) {
            $http.delete(API_SHOES + '/' + deleteId).then(
                function (res) {onGetList()},
                function (err) {console.log(err)}
            );
        }
    };

}
