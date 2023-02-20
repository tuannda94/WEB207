var EditController = function ($scope, $http, $location, $routeParams) {
    if ($routeParams.editId) {
        $http.get(API_SHOES + '/' + $routeParams.editId).then(
            function (res) {
                console.log(res.data);
                $scope.nameInput = res.data.name;
                $scope.priceInput = res.data.price;
                $scope.quantityInput = res.data.quantity;
                $scope.brandInput = res.data.brand;
                $scope.sizeInput = res.data.size.join(',');
            },
            function (err) {}
        )
    }

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

        $http.put(
            API_SHOES + '/' + $routeParams.editId,
            JSON.stringify(newObj)
        ).then(
            function (res) {
                $location.path('/list');
            },
            function (err) {},
        )
    }
};
