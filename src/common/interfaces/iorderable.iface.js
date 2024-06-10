/*
 * /imports/common/interfaces/iorderable.iface.js
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
     *  Note that 'a' and 'b' are not really the implementation objects, but extensions as objects with following keys:
     *  - idx: the index of the object in the IStack instance, the greater being the most recent
     *  - o: the object itself
     * @returns {Integer} the usual sort result (-1 if a<b, 0 if they are equal, +1 if a>b)
     */
    IOrderableCompare( a, b ){
        return 0;
    }
});
