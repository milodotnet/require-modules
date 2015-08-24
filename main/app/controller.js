define(['main/view', 'notes/bootstrap', 'Davis'], function (View, nm, Davis) {

    var addToolbarButton = function(registration) {

        var button = $('<button />');
        button.attr('id', registration.name);
        button.on('click', registration.callback);
        button.text(registration.title);
        $('.toolbar').append(button);
    };

    var addLink = function(registration) {
        var link = $('<a/>');
        link.attr('href', registration.href);
        link.attr('id', registration.name);
        link.text(registration.title);
        $(registration.where).append(link);
    };

    return {
        run: function () {
            View().show();

            var commandChannel = {
                register : function (cmdRegistration) {
                               var app = Davis(function () {
                                        console.log('href  ' + cmdRegistration.href +  ' calls ' + cmdRegistration.callback)
                                        this.get(cmdRegistration.href, cmdRegistration.callback);
                                 });
                                addLink(cmdRegistration);
                           }
            };
            nm.init(commandChannel);
        }
    };

});