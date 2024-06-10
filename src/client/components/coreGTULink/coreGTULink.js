/*
 * /src/client/components/coreGTULink/coreGTULink.js
 */

import { pwixI18n } from 'meteor/pwix:i18n';

import './coreGTULink.html';

Template.coreGTULink.helpers({

    // the label
    label(){
        return this.label || pwixI18n.label( I18N, 'gtulink.label' );
    },

    // the route
    route(){
        return this.route || ( OrderableStack._conf.routePrefix || '' )+'/gtu';
    },

    // the title
    title(){
        return this.title || pwixI18n.label( I18N, 'gtulink.title' );
    }
});
