
var app = angular.module('menuApp', ['ngRoute']);

app.controller('menuCntrl', function ($scope) {
    $scope.message = "Welcome ";
});

app.config(function ($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'Pages/Home.html',
        controller: 'homeController'
    })
    .when('/about', {
        templateUrl: 'Pages/About.html',
        controller: 'aboutController'
    })
     .when('/contact', {
         templateUrl: 'Pages/Contact.html',
         controller: 'contactController'
     });
});

app.controller('homeController', function ($scope) {
    $scope.message = "Home Page ";
});

app.controller('aboutController', function ($scope) {
    $scope.message = "About Page ";
});
app.controller('contactController', function ($scope) {
    $scope.message = "Contact Page ";
});
