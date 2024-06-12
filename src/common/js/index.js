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
import './i18n.js';
//
import './configure.js';

OStack.Orderable = Orderable;
OStack.OrderableStack = OrderableStack;
OStack.Stack = Stack;

OStack.IOrderable = IOrderable;
OStack.IOrderableStack = IOrderableStack;
OStack.IStack = IStack;
