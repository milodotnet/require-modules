define(['jquery', 'Handlebars', 'notesBaseUrl'], function($, Handlebars, notesBaseUrl) {

    return {
        show: function(config) {
            $.ajax(notesBaseUrl + '/notes.handlebars').done(function (source) {
                var template = Handlebars.compile(source);
                var html = template({configuration: config});
                $('body').append(html);
            })
        }
    }

});