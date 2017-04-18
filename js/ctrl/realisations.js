var $ = require('../jquery')

module.exports = function(controllers) {
    controllers.controller('realisationsCtrl', function($scope, $rootScope) {
        $('.parallax').parallax()
        $('.modal').modal()
    })
}