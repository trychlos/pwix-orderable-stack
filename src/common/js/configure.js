/*
 * pwix:orderable-stack/src/common/js/configure.js
 */

import _ from 'lodash';

OrdStack._conf = {};

OrdStack._defaults = {
    verbosity: OrdStack.C.Verbose.CONFIGURE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server.
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
OrdStack.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( OrdStack._conf, OrdStack._defaults, o );
        // be verbose if asked for
        if( OrdStack._conf.verbosity & OrdStack.C.Verbose.CONFIGURE ){
            //console.log( 'pwix:orderable-stack configure() with', o, 'building', OrderableStack._conf );
            console.log( 'pwix:orderable-stack configure() with', o );
        }
    }
    // also acts as a getter
    return OrdStack._conf;
}

_.merge( OrdStack._conf, OrdStack._defaults );
