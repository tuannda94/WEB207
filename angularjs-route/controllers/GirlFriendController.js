var GirlFriendController = function ($scope, $http, $location) {
    // Định nghĩa dữ liệu mặc định
    $scope.thong_tin_ca_nhan = {
        ten: '',
        tuoi: 0,
        dia_chi: ''
    };
    $scope.ds_nguoi_yeu = [];
    $scope.loading = true;
    // Làm việc với API để lấy dữ liệu mới về
    $http.get(API_TTCN)
        .then(
            function (res) {
                // Nếu lấy dữ liệu thành công thì mới vào đây
                $scope.thong_tin_ca_nhan = res.data;
            },
            function (err) {console.log(err);}
        );
    $scope.onGetList = function () {
        $http.get(API_NY)
            .then(
                function (res) {
                    $scope.loading = false;
                    $scope.ds_nguoi_yeu = res.data;
                },
                function (err) {console.log(err);}
            );
    }
    // Được gọi 1 lần khi controller được chạy vào

    $scope.onGetList();

    $scope.onDelete = function (deleteId) {
        var isConfirm = confirm('Bạn có muốn xoá không?');
        if (!isConfirm) {
            return;
        }

        $http.delete(`${API_NY}/${deleteId}`).then(
            function (res) {
                // Có vấn đề về việc tự reload trang
            },
            function (err) {}
        );
    }
};
