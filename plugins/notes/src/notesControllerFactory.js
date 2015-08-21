define([], function () {
    var factory = function(notesView) {
        var controller = {
            activate : function() {
                notesView.show({ text : 'notes model text' });
            }
        };
        return controller;
    };

    return factory;
});