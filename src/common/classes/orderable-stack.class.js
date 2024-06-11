/*
 * pwix:orderable-stack/src/common/classes/orderable-stack.class.js
 *
 * A class which implements the IOrderableStack interface.
 */

import _ from 'lodash';
const assert = require( 'assert' ).strict; // up to nodejs v16.x
import mix from '@vestergaard-company/js-mixin';

import { Stack } from './stack.class.js';

import { IOrderableStack } from '../interfaces/iorderable-stack.iface.js';

export class OrderableStack extends mix( Stack ).with( IOrderableStack ){

    // static data

    // static methods

    // private data

    // private methods

    // public data

    /**
     * Constructor
     * @returns {OrderableStack}
     */
    constructor(){
        super( ...arguments );
        return this;
    }
}
