# pwix:orderable-stack

## What is it ?

This Meteor packages provides some interfaces to manage:
- pure usual LIFO stacks
- a type of LIFO-extended stack which defines the next out item as a combination of an item-specific order and its in-order.

A typical use case, for example, is to push error messages into the stack, and then display them in a level order (errors first, then warnings, and so on).

Besides of these interfaces, `pwix:orderable-stack` also provides sample implementation classes, which the caller can directly implement (or, of course, derive).

## Installation

This Meteor package is installable with the usual command:

```
    meteor add pwix:orderable-stack
```

## Usage

```
    import { OStack } from 'meteor/pwix:orderable-stack';
```

## Provides

### `OStack`

The exported `OStack` global object provides following items:

#### Functions

##### `OStack.configure()`

See [below](#configuration).

##### `OStack.i18n.namespace()`

A function which returns the i18n namespace used by the package. Used to add translations at runtime.

#### Interfaces

##### `OStack.IOrderable`

An interface which let an object provides its own personal semantic order.

It defines following methods:

- `IOrderableCompare( a<IOrderable>, b<IOrderable> )`

    A standard comparison function which must returns the usual sort result:

    - -1 if `a` lesser than `b`
    -  0 if `a` equal `b`
    - +1 if `a` greater than `b`.

This interface MUST be implemented by any object which will want take advantage of the `IOrderableStack` interface.

##### `OStack.IOrderableStack`

An interface which manages an `IStack` of `IOrderable`'s.

It provides following methods:

- `IOrderableStackLast()`

    Returns the topmost object of the stack in the semantic order as provided by `OStack.IOrderable` interface first, and the standard LIFO order then.

The implementator MUST also implement the `OStack.IStack` interface. This is notably the case if the implementor chooses to derive from `OStack.Stack` class.

##### `OStack.IStack`

A very simple interface to manage a stack of objects.

It provides following methods:

- `IStackClear()`

    Clears the content of the stack.

- `IStackDump()`

    Dump the content of the stack to the console.

    A reactive data source.

- `IStackLast()`

    Returns the last object of the stack.

    A reactive data source.

- `IStackPull()`

    Remove (and returns) the last object of the stack.

    A reactive data source.

- `IStackPush( o )`

    Add an object at the end of the stack.

#### Classes

##### `OStack.Orderable`

A pure virtual class which implements the `IOrderable` interface.

This class cannot be instanciated as-is. It MUST be derived, and a `IOrderableCompare()` function MUST be provided by the derived class.

##### `OStack.OrderableStack`

A class, derived from `OStack.Stack`, which implements the `IOrderableStack` interface.

##### `OStack.Stack`

A class which implements the `IStack` interface.

## Configuration

The package's behavior can be configured through a call to the `OStack.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `verbosity`

    Define the expected verbosity level.

    The accepted value can be any or-ed combination of following:

    - `OStack.C.Verbose.NONE`

        Do not display any trace log to the console

    - `OStack.C.Verbose.CONFIGURE`

        Trace `OStack.configure()` calls and their result

Please note that `OStack.configure()` method should be called in the same terms both in client and server sides.

Remind too that Meteor packages are instanciated at application level. They are so only configurable once, or, in other words, only one instance has to be or can be configured. Addtionnal calls to `OStack.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

## NPM peer dependencies

Starting with v 1.0.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`.

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.1.0:
```
    'lodash': '^4.17.0',
    '@vestergaard-company/js-mixin': '^1.0.3'
```

Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

## Translations

New and updated translations are willingly accepted, and more than welcome. Just be kind enough to submit a PR on the [Github repository](https://github.com/trychlos/pwix-orderable-stack/pulls).

## Cookies and comparable technologies

None at the moment.

---
P. Wieser
- Last updated on 2024, Jun. 12th
