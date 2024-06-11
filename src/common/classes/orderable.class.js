/*
 * pwix:orderable-stack/src/common/classes/orderable.class.js
 *
 * A pure virtual class which implements the IOrderable interface.
 *
 * Thoough this class implements the IOrderable interface, it doesn't provide IOrderableCompare() function. This later MUST be provided by a derived class.
 */

import _ from 'lodash';
const assert = require( 'assert' ).strict; // up to nodejs v16.x
import mix from '@vestergaard-company/js-mixin';

import { Base } from './base.class.js';

import { IOrderable } from '../interfaces/iorderable.iface.js';

export class Orderable extends mix( Base ).with( IOrderable ){

    // static data

    // static methods

    // private data

    // private methods

    // public data

    /**
     * Constructor
     * @returns {Orderable}
     */
    constructor(){
        super( ...arguments );
        return this;
    }
}
