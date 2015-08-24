define(function (require) {


    function registerCmd(commandChannel, name, fn, where, title, href) {
         var commandRegistration = {
                name        : name,
                callback    : fn,
                where       : where,
                title       : title,
                href        : href
            };
            commandChannel.register(commandRegistration);
    }
    return {
        init: function (commandChannel) {
            var notesControllerFactory = require('notes/notesControllerFactory');
            var notesViewFactory = require('notes/notesViewFactory');

            var jquery = require('jquery') ;
            var handlebars = require('handlebars');

            var notesViewTemplateSource = require('text!notes/notes.handlebars');
            var compiledTemplate = handlebars.compile(notesViewTemplateSource)

            var notesView = notesViewFactory(jquery, compiledTemplate);



            var notesController = notesControllerFactory(notesView);
            //registerCmd(commandChannel, 'notesMain', function() { console.log('!'); }, '.toolbar', '', '');
            registerCmd(commandChannel, 'activateNotes', notesController.activate, '.toolbar', 'active the notes module', '/#/notes/activate');


        }
    };

});