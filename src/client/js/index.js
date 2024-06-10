/*
 * pwix:orderable-stack/src/client/js/index.js
 */

import '../../common/js/index.js';

// provides base classes in OrderableStack global object
import { DisplaySet } from '../classes/display-set.class';
import { DisplayUnit } from '../classes/display-unit.class';
import { EntityChecker } from '../classes/entity-checker.class';
import { FormChecker } from '../classes/form-checker.class';
import { RunContext } from '../classes/run-context.class';

OrderableStack.DisplaySet = DisplaySet;
OrderableStack.DisplayUnit = DisplayUnit;
OrderableStack.EntityChecker = EntityChecker;
OrderableStack.FormChecker = FormChecker;
OrderableStack.RunContext = RunContext;

// our functions
import './DOM.js';
