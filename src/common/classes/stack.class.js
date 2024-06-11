/*
 * pwix:orderable-stack/src/common/classes/stack.class.js
 *
 * A class which implements the IStack interface.
 */

import _ from 'lodash';
const assert = require( 'assert' ).strict; // up to nodejs v16.x
import mix from '@vestergaard-company/js-mixin';

import { Base } from './base.class.js';

import { IStack } from '../interfaces/istack.iface.js';

export class Stack extends mix( Base ).with( IStack ){

    // static data

    // static methods

    // private data

    // private methods

    // public data

    /**
     * Constructor
     * @returns {Stack}
     */
    constructor(){
        super( ...arguments );
        return this;
    }
}
