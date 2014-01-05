'use strict';

require.config({

    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        'domReady': '../bower_components/requirejs-domready/domReady',
        'text': '../bower_components/requirejs-text/text'
    },

    shim: {
        'angular': {
            exports: 'angular'
            // init: function() {
            //     var a = this.angular;
            //     // try { delete this.angular; }
            //     // catch (error) { this.angular = undefined; }
            //     return a;
            // }
        },
        'angular-ui-router': {
            deps: [ 'angular' ]
        }
    },

    deps: ['./bootstrap']
});
