/*
 * pwix:orderable-stack/src/common/js/index.js
 */

import { Orderable } from '../classes/orderable.class';
import { OrderableStack } from '../classes/orderable-stack.class';
import { Stack } from '../classes/stack.class';

import { IOrderable } from '../interfaces/iorderable.iface.js';
import { IOrderableStack } from '../interfaces/iorderable-stack.iface.js';
import { IStack } from '../interfaces/istack.iface.js';

import './global.js';
import './constants.js';
//
import './configure.js';
import './i18n.js';

OrderableStack.Orderable = Orderable;
OrderableStack.OrderableStack = OrderableStack;
OrderableStack.Stack = Stack;

OrderableStack.IOrderable = IOrderable;
OrderableStack.IOrderableStack = IOrderableStack;
OrderableStack.IStack = IStack;
