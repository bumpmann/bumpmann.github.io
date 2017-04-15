const myAppControllers = angular.module('myAppControllers', []);

const $ = require('./jquery')
require('./ctrl/home')(myAppControllers)
require('./ctrl/parcours')(myAppControllers)
require('./ctrl/realisations')(myAppControllers)
require('./ctrl/contact')(myAppControllers)

const myApp = angular.module('MyApp', [
  require('angular-route'),
  "myAppControllers"
])
.config(function($routeProvider,$locationProvider) {
   $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'homeCtrl'
  })
  .when('/parcours', {
    templateUrl: 'partials/parcours.html',
    controller: 'parcoursCtrl'
  })
  .when('/realisations', {
    templateUrl: 'partials/realisations.html',
    controller: 'realisationsCtrl'
  })
  .when('/contact', {
    templateUrl: 'partials/contact.html',
    controller: 'contactCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
})
.run(function() {
    $('.button-collapse').sideNav();
    console.log("MyApp is ready")
})