/*
 * pwix:orderable-stack/src/common/interfaces/iorderable.iface.js
 *
 * The IOrderable interface let objects provide their own semantic order.
 */

import _ from 'lodash';
const assert = require( 'assert' ).strict;
import { DeclareMixin } from '@vestergaard-company/js-mixin';

export const IOrderable = DeclareMixin(( superclass ) => class extends superclass {

    // private data

    /**
     * @summary Constructor
     * @returns {IOrderable}
     */
    constructor(){
        super( ...arguments );
        return this;
    }

    /**
     * @param {Object} a
     * @param {Object} b
     * @returns {Integer} the usual sort result (-1 if a lesser than b, 0 if they are equal, +1 if a greater than b)
     */
    iOrderableCompare( a, b ){
        assert( false, 'this is a pure virtual method, MUST be defined by the implementor' );
        return 0;
    }
});
