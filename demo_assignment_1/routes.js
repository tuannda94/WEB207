// các controller phải được đưa vào window trong file XXXController.js
// controller cần đưa vào script trong file index.html trước khi bắt đầu script route
app.config(function ($routeProvider) {
    $routeProvider
        // không đưa index.html vào trong quản lý route
        .when('/', {
            templateUrl: './pages/home.html'
        })
        .when('/about', {
            templateUrl: './pages/about.html',
            controller: AboutController
        })
        .when('/products', {
            templateUrl: './pages/product.html',
            controller: ProductController
        })
        .when('/categories', {
            templateUrl: './pages/category.html',
            controller: CategoryController
        })
        // .when('/categories/create', {
        //     templateUrl: './pages/category.html',
        //     controller: CategoryController
        // })
        // .when('/categories/edit/:id', {
        //     templateUrl: './pages/category.html',
        //     controller: CategoryController
        // })
        .when('/categories/:id', { // phải đưa :id xuống cuối cùng
            templateUrl: './pages/category-detail.html',
            controller: CategoryDetailController
        })
});
