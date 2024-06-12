/*
 * pwix:orderable-stack/src/common/js/i18n.js
 */

import { pwixI18n } from 'meteor/pwix:i18n';

import '../i18n/en.js';
pwixI18n.namespace( I18N, 'en', OStack.i18n.en );

import '../i18n/fr.js';
pwixI18n.namespace( I18N, 'fr', OStack.i18n.fr );

OStack.i18n.namespace = function(){
    return I18N;
};
