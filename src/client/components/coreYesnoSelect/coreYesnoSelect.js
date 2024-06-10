/*
 * pwix:orderable-stack/src/client/components/coreYesnoSelect/coreYesnoSelect.js
 *
 * Select a Yes|No boolean.
 * 
 * Parms:
 * - selected: the current boolean value
 * - title: the title to be attributed to the select element
 * - enabled: a boolean value which says if the element is enabled, defaulting to true
 * 
 * Events:
 *  - 'yesno-selected' with { value: true|false, id:<id> }
 */

import _ from 'lodash';

import { pwixI18n } from 'meteor/pwix:i18n';

import { YesNo } from '../../../common/definitions/yesno.def.js';

import './coreYesnoSelect.html';
import './coreYesnoSelect.less';

Template.coreYesnoSelect.helpers({
    // whether the element is enabled ?
    disabled(){
        return this.enabled === false ? 'disabled' : '';
    },

    // whether we have a currently selected value ?
    hasCurrent(){
        return _.isBoolean( this.selected );
    },

    // string translation
    i18n( arg ){
        return pwixI18n.label( I18N, arg.hash.key );
    },

    // return the list of known items
    itemsList(){
        return YesNo.Knowns();
    },

    // return the item identifier
    itId( it ){
        return YesNo.id( it );
    },

    // return the item label
    itLabel( it ){
        return YesNo.label( it );
    },

    // whether the item is selected
    itSelected( it ){
        return ( this.selected === YesNo.value( it )) ? 'selected' : '';
    }
});

Template.coreYesnoSelect.events({
    'input .ca-yesno-select'( event, instance ){
        const selected = instance.$( '.ca-yesno-select select option:selected' ).val();
        const def = YesNo.byId( selected );
        instance.$( '.ca-yesno-select' ).trigger( 'yesno-selected', {
            value: YesNo.value( def ),
            id: YesNo.id( def )
        });
    }
});
