define(['jquery', 'handlebars','text!app/main.handlebars'], function ($, Handlebars, src) {

    return function () {
        return {
            show: function () {
                var template = Handlebars.compile(src);
                var html = template({some : 'data'});
                $('body').append(html);
            }
        };
    };

});