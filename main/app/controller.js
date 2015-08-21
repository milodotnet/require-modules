define(['main/view', 'notes/bootstrap'], function (View, nm) {

    return {
        run: function () {
            View().show();

            nm.init({text: 'notes-configuration'});

        }
    };

});