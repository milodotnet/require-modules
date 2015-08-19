define(['jquery', 'handlebars'], function ($, Handlebars) {

    return function () {
        return {
            show: function () {
                $.ajax('app/main/main.handlebars').done(function (source) {
                    var template = Handlebars.compile(source);
                    var html = template({some : 'data'});
                    $('body').append(html);
                })
            }
        };
    };

});