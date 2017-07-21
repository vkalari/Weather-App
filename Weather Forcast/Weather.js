var app = angular.module('myApp',['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when("/Home",{

        templateUrl : "Home.html"


    }).when("/Weather",{

        templateUrl : "Weather.html",
        controller : "WeatherController"

    })
});


app.controller('WeatherController', function($scope, $http) {
     $scope.Search= function()
     {

         $http
             .get("http://api.openweathermap.org/data/2.5/weather?q="+$scope.city +"&appid=e9e6c6c955ddd33aaccc31b6aea8d7bb")
             .then(function (response) {
                 $scope.myData = response.data.main;
                 $scope.maindata = response.data.sys;
                 console.log(response);
                 return $scope.temp = $scope.myData;
             });
     };

 });