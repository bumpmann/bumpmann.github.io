var $ = require('../jquery')

module.exports = function(controllers) {
    controllers.controller('contactCtrl', function($scope) {
        $('.parallax').parallax();
        /*$('#contact-form').submit(function() {
            $.ajax({
                url: 'https://hooks.zapier.com/hooks/catch/2154672/1sys8p/',
                type: "POST",
                data: JSON.stringify({
                    subject: $('#subject').val(),
                    name: $('#name').val(),
                    email: $('#email').val(),
                    message: $('#message').val()
                }),
                dataType: 'json',
                async: false,
                //contentType: 'application/json; charset=utf-8',
                success: function(msg) {
                }
            })
        })*/
    })
}