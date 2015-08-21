define([], function () {
    return {
        init: function (config) {
            require(['notes/notesController'], function(notesController) {
                notesController.init(config);
            });
        }
    };

});