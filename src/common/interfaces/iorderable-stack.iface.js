/*
 * pwix:orderable-stack/src/common/interfaces/iorderable-stack.iface.js
 *
 * An interface to manage orderable objects.
 * - the class which implements this interface MUST also implement IStack.
 * - the managed objects MUST implement IOrderable.
 *
 * This interace provides methods as reactive data sources.
 */

import _ from 'lodash';
const assert = require( 'assert' ).strict;
import { DeclareMixin } from '@vestergaard-company/js-mixin';

import { IOrderable } from '../interfaces/iorderable.iface.js';
import { IStack } from '../interfaces/istack.iface.js';

export const IOrderableStack = DeclareMixin(( superclass ) => class extends superclass {

    // private data

    // private methods

    // we want the object have their own semantic order
    //  but to have a sorted result we also have to give it its index
    _lastOrdered(){
        let _foo = [];
        for( let i=0 ; i<this._set.length-1 ; ++i ){
            const o = this._set[i];
            check( o, IOrderable );
            _foo.push({ idx: i, o: o });
        }
        let _sorted = _foo.toSorted( _sortFn );
        return _sorted.length > 0 ? _sorted[_sorted.length-1] : null;
    }

    // a and b here are objects { idx, o }
    // we first compare semantic order, and only if equal compare by index
    _sortFn( a, b ){
        assert( a instanceof IOrderable, 'object MUST implement the IOrderable interface' );
        assert( b instanceof IOrderable, 'object MUST implement the IOrderable interface' );
        let res = IOrderableCompare( a.o, b.o );
        if( !res ){
            res = a.idx > b.idx ? -1 : ( a.idx < b.idx ? +1 : 0 );
        }
        return res;
    }

    /**
     * @summary Constructor
     * @returns {IMessagesOrderedSet} the instance
     */
    constructor(){
        super( ...arguments );

        assert( this instanceof IStack, 'the implementation class MUST also implements IStack' );

        return this;
    }

    /**
     * @returns {Object} last message, searched for in decreasing order of object semantic order
     *  A reactive data source
     */
    iOrderableStackLast(){
        this._dep.depend();
        return this._set.length ? this._lastOrdered() : null;
    }
});
