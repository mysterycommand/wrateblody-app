require.config({
    deps: ['main'],
    paths: {
        handlebars: '../bower_components/handlebars/handlebars.runtime',
        jquery: '../bower_components/jquery/jquery',
        text: '../bower_components/requirejs-text/text'
    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        }
    }
});
