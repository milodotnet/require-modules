define(['jquery', 'handlebars', 'text!notes/notes.handlebars'], function($, Handlebars, source) {

    return {
        show: function(config) {

            var template = Handlebars.compile(source);
            var html = template({configuration: config});
            $('body').append(html);

        }
    }

});