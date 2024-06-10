/*
 * pwix:orderable-stack/src/common/js/configure.js
 */

import _ from 'lodash';

OrderableStack._conf = {};

OrderableStack._defaults = {
    verbosity: OrderableStack.C.Verbose.CONFIGURE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server.
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
OrderableStack.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( OrderableStack._conf, OrderableStack._defaults, o );
        // be verbose if asked for
        if( OrderableStack._conf.verbosity & OrderableStack.C.Verbose.CONFIGURE ){
            //console.log( 'pwix:orderable-stack configure() with', o, 'building', OrderableStack._conf );
            console.log( 'pwix:orderable-stack configure() with', o );
        }
    }
    // also acts as a getter
    return OrderableStack._conf;
}

_.merge( OrderableStack._conf, OrderableStack._defaults );
