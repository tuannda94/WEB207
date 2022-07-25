window.UserController = function($scope, $http, $routeParams, $route) {
    // Đây là đầu API được cung cấp bởi json-server theo file db.json
    var apiURL = 'http://localhost:3000/users';
    // $http.get() nhận vào đường dẫn API, gọi bằng phương thức GET, chờ trả về 1 Promise, cần chờ
    // Khi dữ liệu được lấy thành công sẽ chạy vào then và trả kq cho tham số response
    // Nếu lỗi thì sẽ không vào then mà vào catch để trả lỗi vào tham số errors
    $http.get(apiURL)
        .then(function (response) {
            console.log(response.data);
            $scope.users = response.data;
        })
        .catch(function (errors) {
            console.log(errors);
        });
}
