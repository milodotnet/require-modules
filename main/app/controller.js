define(['main/view', 'notes/bootstrap'], function (View, nm) {

    var addToolbarButton = function(registration) {

        var button = $('<button />');
        button.attr('id', registration.name);
        button.on('click', registration.callback);
        button.text(registration.title);
        $('.toolbar').append(button);
    };

    return {
        run: function () {
            View().show();

            var commandChannel = {
                register : function (cmdRegistration) {
                                addToolbarButton(cmdRegistration);
                           }
            };
            nm.init(commandChannel);
        }
    };

});