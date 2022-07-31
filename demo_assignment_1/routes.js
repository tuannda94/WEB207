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
});
