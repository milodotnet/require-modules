define("notesModule", [], function () {

    return function(baseUrl) {
        requirejs.config({
            paths: {
                notes : baseUrl + 'notes/src'
            }
        });

        define('notesBaseUrl', [], function () {
            return baseUrl + 'notes/src';
        });

        return {
            init: function (config) {
                require(['notes/notesController'], function(notesController) {
                    notesController.init(config);
                });
            }
        };
    };

});