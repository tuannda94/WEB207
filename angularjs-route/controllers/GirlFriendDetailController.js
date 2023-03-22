// GirlFriendDetailController.js
var GirlFriendDetailController = function ($scope, $routeParams) {
    $scope.ma_ny = $routeParams.id; // $routeParams.ten_thuoc_tinh ở when
    $scope.ten_ny = $routeParams.name; // $routeParams.ten_thuoc_tinh ở when
    console.log($scope.ma_ny, $scope.ten_ny);
};
