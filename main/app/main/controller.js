define(['app/main/view', 'app/util/module'], function (View, module) {

    return {
        run: function () {
            View().show();

            module.load('notes').done(function (theModule) {
                theModule.init({text: 'notes-configuration'});
            });

        }
    };

});