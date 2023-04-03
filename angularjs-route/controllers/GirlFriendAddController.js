// GirlFriendAddController.js
var GirlFriendAddController = function ($scope, $http, $location) {
    $scope.inputs = {
        ten: '',
        tuoi: 0,
        img: ''
    };
    // $scope.img = '';

    $scope.onChangeImg = function (event) {
        // event.target thể hiện đối tượng thẻ input file bên kia
        // Sau khi chọn file thì trong đối tượng thẻ đó sẽ có
        // danh sách file đã chọn
        console.log(event.target.files);
        var file = event.target.files[0];
        // $scope.img = file;
        // Hiện tại đang là đối tượng file -> chuỗi base64
        // 1. Đọc file bằng FileReader
        var reader = new FileReader();
        reader.readAsDataURL(file);
        // 2. Đọc toàn bộ nd file và chuyển sang base64
        reader.onloadend = function () {
            $scope.inputs.img = reader.result;
            console.log($scope.inputs);
        }

    };

    $scope.onSave = function () {
        $http.post(API_NY, $scope.inputs).then(
            function (res) {$location.path('/quan-ly')},
            function (err) {}
        )
    }
}
