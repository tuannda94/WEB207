var EditController = function ($scope, $http, $location, $routeParams) {
    // Những thứ đằng sau $scope là view có thể tương tác được

    // Lấy được :id từ trên đường dẫn xuống đây
    var editId = $routeParams.id;
    // Sử dụng id đó để call API lấy bản ghi chi tiết
    $scope.editItem = {};
    $http.get(API_URL + '/users/' + editId).then(
        function (res) {
        // Đưa vào form để tiếp tục chỉnh sửa
        // ng-model="editItem.name"
            $scope.editItem = res.data;
            // console.log($scope.editItem);
        },
        function (err) {
            console.log(err);
        }
    );

    // Lưu và quay về danh sách
    $scope.onSave = function () {
        $http.put(
            API_URL + '/users/' + editId,
            JSON.stringify({name: $scope.editItem.name})
        ).then(
            function(res) {$location.path('/ds-nguoi-dung')},
            function(err) {console.log(err)},
        )
    }

}
