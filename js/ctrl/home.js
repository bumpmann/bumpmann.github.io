var $ = require('../jquery')

module.exports = function(controllers) {
    controllers.controller('homeCtrl', function($scope) {
        $('.parallax').parallax();
    })
}