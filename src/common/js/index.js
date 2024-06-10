/*
 * pwix:orderable-stack/src/common/js/index.js
 */

//import { MessagesOrderedSet } from '../classes/messages-ordered-set.class';
//import { OrderableStack } from '../classes/orderable-stack.class';
import { Stack } from '../classes/stack.class';
//import { TypedMessage } from '../classes/typed-message.class';

//import { FieldCheck } from '../definitions/field-check.def';
//import { FieldType } from '../definitions/field-type.def';
//import { MessageType } from '../definitions/message-type.def';
//import { TypeOrder } from '../definitions/type-order.def';
//import { YesNo } from '../definitions/yesno.def';

//import { IMessagesOrderedSet } from '../interfaces/imessages-ordered-set.iface';
import { IOrderable } from '../interfaces/iorderable.iface.js';
import { IStack } from '../interfaces/istack.iface.js';
//import { ITypedMessage } from '../interfaces/ityped-message.iface';

import './global.js';
import './constants.js';
//
import './configure.js';
import './date.js';
import './env-settings.js';
import './i18n.js';

//OrderableStack.Base = caBase;
//OrderableStack.MessagesOrderedSet = MessagesOrderedSet;
//OrderableStack.OrderableStack = OrderableStack;
OrderableStack.Stack = Stack;
//OrderableStack.TypedMessage = TypedMessage;

//OrderableStack.FieldCheck = FieldCheck;
//OrderableStack.FieldType = FieldType;
//OrderableStack.MessageType = MessageType;
//OrderableStack.TypeOrder = TypeOrder;
//OrderableStack.YesNo = YesNo;

//OrderableStack.IMessagesOrderedSet = IMessagesOrderedSet;
OrderableStack.IOrderable = IOrderable;
OrderableStack.IStack = IStack;
//OrderableStack.ITypedMessage = ITypedMessage;
