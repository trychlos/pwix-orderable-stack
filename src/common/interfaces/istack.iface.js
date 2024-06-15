/*
 * pwix:orderable-stack/src/common/interfaces/istack.iface.js
 *
 * A very simple interface to manage a stack of objects.
 *
 * This interace provides methods as reactive data sources.
 */

import _ from 'lodash';
const assert = require( 'assert' ).strict;
import { DeclareMixin } from '@vestergaard-company/js-mixin';

import { Tracker } from 'meteor/tracker';

export const IStack = DeclareMixin(( superclass ) => class extends superclass {

    // private data

    // the set of objects
    //  a private data, but still used by IMessagesOrderedSet to scan the current set
    _set = [];

    // dependency tracking
    //  a private data, but still used by IMessagesOrderedSet to make this later depend of the former
    _dep = null;

    /**
     * @summary Constructor
     * @returns {IStack} the instance
     */
    constructor(){
        super( ...arguments );

        this._dep = new Tracker.Dependency();

        return this;
    }

    /**
     * @summary Clears the message stack
     */
    iStackClear(){
        //console.debug( 'iStackClear()' );
        this._set = [];
        this._dep.changed();
    }

    /**
     * @summary Dumps the message stack
     */
    iStackDump(){
        this._set.every(( o ) => {
            console.debug( 'iStackDump()', o );
            return true;
        });
        this._dep.depend();
    }

    /**
     * @returns {Object} the last pushed object
     */
    iStackLast(){
        this._dep.depend();
        return this._set.length > 0 ? this._set[this._set.length-1] : null;
    }

    /**
     * @summary Remove the last pushed object from the stack
     * @returns {Object} the last pushed object
     */
    iStackPull(){
        this._dep.depend();
        return this._set.length > 0 ? this._set.pop() : null;
    }

    /**
     * @param {Object} o the object to be pushed
     */
    iStackPush( o ){
        assert( o , 'iStackPush() o is not set' )
        this._set.push( o );
        this._dep.changed();
    }
});
