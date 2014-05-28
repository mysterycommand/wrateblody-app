/** ================================================================================================================ **/
/**
 * @fileOverview
 *
 * @author Matt Hayes <matt@mysterycommand.com>
 * @version 0.1.3
 */
/** ================================================================================================================ **/

'use strict';

require.config({
    baseUrl: 'scripts',
    deps: ['runner'],
    paths: {
        spec: '../spec',
        runner: '../spec/main',
        appConfig: 'config'
    },
    shim: {
        runner: ['appConfig']
    }
});
