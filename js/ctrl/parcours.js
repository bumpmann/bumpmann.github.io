var $ = require('../jquery')

module.exports = function(controllers) {
    controllers.controller('parcoursCtrl', function($scope) {
        $('.parallax').parallax();
    })
}