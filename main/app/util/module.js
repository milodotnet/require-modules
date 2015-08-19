define(['jquery'], function($) {

    var externalModuleBaseUrl = 'http://localhost:8030/';

    var moduleBootstrapUrl = function(moduleName) {
        return externalModuleBaseUrl + moduleName + '/bootstrap.js';
    }

    return {
        load: function(moduleName) {
            var deferredModule = $.Deferred();
            $.ajax(moduleBootstrapUrl(moduleName)).done(function () {
                require([moduleName + 'Module'], function(module) {
                    deferredModule.resolve(module(externalModuleBaseUrl));
                });
            });
            return deferredModule.promise();
        }
    }

});