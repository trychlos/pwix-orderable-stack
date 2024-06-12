/*
 * pwix:orderable-stack/src/common/js/configure.js
 */

import _ from 'lodash';

OStack._conf = {};

OStack._defaults = {
    verbosity: OStack.C.Verbose.CONFIGURE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server.
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
OStack.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( OStack._conf, OStack._defaults, o );
        // be verbose if asked for
        if( OStack._conf.verbosity & OStack.C.Verbose.CONFIGURE ){
            //console.log( 'pwix:orderable-stack configure() with', o, 'building', OrderableStack._conf );
            console.log( 'pwix:orderable-stack configure() with', o );
        }
    }
    // also acts as a getter
    return OStack._conf;
}

_.merge( OStack._conf, OStack._defaults );
