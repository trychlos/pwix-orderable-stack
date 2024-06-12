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
    import { Stack } from 'meteor/pwix:orderable-stack';
```

## Provides

The exported `Stack` global object provides following items:

### Functions

#### `Stack.configure()`

See [below](#configuration).

#### `Stack.i18n.namespace()`

A function which returns the i18n namespace used by the package. Used to add translations at runtime.

### Interfaces

#### `Stack.IOrderable`

An interface which let an object provides its own personal semantic order.

It defines following methods:

- `IOrderableCompare( a<any>, b<any> )`

    A standard comparison function which must returns the usual sort result:

    - -1 if `a` lesser than `b`
    - -1 if `a` equal `b`
    - +1 if `a` greater than `b`.

    Please note that provided `a` and `b` arguments are `IOrderableStack` objects with following keys:

    - `idx`: the index of the object in the underlying `IStack` object, the greater being the most recent
    - `o`: the object itself.

This interface MUST be implemented by any object which will want take advantage of the `IOrderableStack` interface.

#### `Stack.IOrderableStack`

An interface which manages an `IStack` of `IOrderable`'s.

It provides following methods:

- `IOrderableStackLast()`

    Returns the topmost object of the stack in the semantic order first, and the standard LIFO order then, as provided by `Stack.IOrderable` interface.

#### `Stack.IStack`

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

### Classes

#### `Stack.Orderable`

A pure virtual class which implements the `IOrderable` interface.

This class MUST be derived, and a `IOrderableCompare()` function MUST be provided by the derived class.

#### `Stack.OrderableStack`

A class, derived from `Stack.Stack`, which implements the `IOrderableStack` interface.

#### `Stack.Stack`

A class which implements the `IStack` interface.

## Configuration

The package's behavior can be configured through a call to the `Stack.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `verbosity`

    Define the expected verbosity level.

    The accepted value can be any or-ed combination of following:

    - `Stack.C.Verbose.NONE`

        Do not display any trace log to the console

    - `Stack.C.Verbose.CONFIGURE`

        Trace `Stack.configure()` calls and their result

Please note that `Stack.configure()` method should be called in the same terms both in client and server sides.

Remind too that Meteor packages are instanciated at application level. They are so only configurable once, or, in other words, only one instance has to be or can be configured. Addtionnal calls to `Stack.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

## NPM peer dependencies

Starting with v 1.0.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`.

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.0.0:
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
- Last updated on 2024, Jun. 10th
