window.AboutController = function($scope, $location, $http, $localStorage) {
    $scope.text = 'ABC';
    $scope.email = '';
    $scope.password = '';

    $scope.onLogin = function() {
        $http.post('http://localhost:3000/login', {
            email: $scope.email,
            password: $scope.password,
        }).then(
            function(response) {
                if (response.status === 200) {
                    // sau khi đăng nhập xong cần điều hướng về ds product
                    $location.path('products');
                    // và lưu thông tin đăng nhập vào localstorage -> cần thư viện ngStorage
                    // Do đã có ngStorage trong app module nên có biến $localStorage trong tham số
                    $localStorage.auth = response.data.user;
                }
            },
            function(errors) {

            }
        )
    }

    $scope.onClickCart = function () {
        $localStorage.cartItems++;
    }
}
