var AddController = function ($scope, $http, $location) {
    $scope.nameInput = '';
    $scope.priceInput = 0;
    $scope.quantityInput = '';
    $scope.brandInput = '';
    $scope.sizeInput = '';

    $scope.onSave = function () {
        var newObj = {
            name: $scope.nameInput,
            price: +$scope.priceInput, // + ép chuỗi số về số
            quantity: +$scope.quantityInput,
            brand: $scope.brandInput,
            size: $scope.sizeInput.split(',').map(function(item) {
                return +item;
            }),
        }

        $http.post(API_SHOES, JSON.stringify(newObj)).then(
            function (res) {
                $location.path('/list');
            },
            function (err) {},
        )
    }
};
