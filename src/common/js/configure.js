/*
 * pwix:orderable-stack/src/common/js/configure.js
 */

import _ from 'lodash';

Stack._conf = {};

Stack._defaults = {
    verbosity: Stack.C.Verbose.CONFIGURE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server.
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
Stack.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( Stack._conf, Stack._defaults, o );
        // be verbose if asked for
        if( Stack._conf.verbosity & Stack.C.Verbose.CONFIGURE ){
            //console.log( 'pwix:orderable-stack configure() with', o, 'building', OrderableStack._conf );
            console.log( 'pwix:orderable-stack configure() with', o );
        }
    }
    // also acts as a getter
    return Stack._conf;
}

_.merge( Stack._conf, Stack._defaults );
