var libsBase = 'bower_components/'

require.config({
    baseUrl: '',
    packages: [
        {
            name: 'main',
            location: 'app'
        },
        {
            name: 'notes',
            location: 'http://localhost:8030/notes/src'
        }],
    paths: {
        jquery: libsBase + 'jquery/dist/jquery',
        handlebars : libsBase + 'handlebars/handlebars',
        text : libsBase + 'requirejs-text/text',
        Davis : libsBase + 'davis/davis.min'
    },
    shim: {
        Davis: {
          deps : ['jquery'],
          exports: 'Davis'
        }
    },
    /* uncomment to map to another view
    map:{
        '*' : {
         'notes/notesView' : 'main/customNotesView'
        }
    },
    */
    config : {
        text: {
            useXhr: function (url, protocol, hostname, port) {
                return (hostname === 'localhost');
            }
        }
    }
});

require(['main/bootstrap']);
