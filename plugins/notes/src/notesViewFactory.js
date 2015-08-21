define([], function() {
    var factory = function ($, template){
        var view = {
            show: function(model) {
                var html = template({configuration: model});
                $('body').append(html);
            }
        }
        return view;
    }
    return factory;
});