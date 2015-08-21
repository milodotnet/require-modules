define(function (require) {

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

            var commandRegistration = {
                name        : 'acivateNotes',
                callback    : notesController.activate,
                where       : 'toolbar',
                title       : 'active the notes module'
            };
            commandChannel.register(commandRegistration);
        }
    };

});