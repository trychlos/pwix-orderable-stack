# pwix:orderable-stack

## What is it ?

This Meteor packages defines an `IOrderableStack` interface and provides a `OrderableStack` implementation of this interface.

_Note: this could be as well just a pure NPM package (todo#1: to do another day)._

## Configuration

The package's behavior can be configured through a call to the `OrderableStack.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `verbosity`

    Define the expected verbosity level.

    The accepted value can be any or-ed combination of following:

    - `OrderableStack.C.Verbose.NONE`

        Do not display any trace log to the console

    - `OrderableStack.C.Verbose.CONFIGURE`

        Trace `OrderableStack.configure()` calls and their result

Please note that `OrderableStack.configure()` method should be called in the same terms both in client and server sides.

Remind too that Meteor packages are instanciated at application level. They are so only configurable once, or, in other words, only one instance has to be or can be configured. Addtionnal calls to `OrderableStack.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

## Provides

The `OrderableStack` global object provides following items:

### Methods

#### `OrderableStack.configure()`

See above.

#### `OrderableStack.i18n.namespace()`

A function which returns the i18n namespace used by the package. Used to add translations at runtime.

### Classes

#### `OrderableStack.Stack`

A class which implements the `IStack` interface.

### Interfaces

#### `OrderableStack.IOrderable`

An interface which let an object provides its own personal semantic order.

It provides following methods:

- `IOrderableCompare()`

    A standard comparison function which must returns the usual sort result:

    - -1 if `a` lesser than `b`
    - -1 if `a` equal `b`
    - +1 if `a` greater than `b`.

    Please note that provided `a` and `b` arguments are `IOrderableStack` objects with following keys:

    - `idx`: the index of the object in the underlying `IStack` object, the greater being the most recent
    - `o`: the object itself.

    This interface MUST be implemented by any object which will want take advantage of the `IOrderableStack` interface.

#### `OrderableStack.IStack`

A very simple interface to manage a stack of objects.

It provides following methods:

- `IStackClear()`

    Clears the content of the stack.

- `IStackDump()`

    Dump the content of the stack to the console.

- `IStackLast()`

    Returns the last object of the stack.

- `IStackPull()`

    Remove (and returns) the last object of the stack.

- `IStackPush( o )`

    Add an object at the end of the stack.

### Blaze components

#### `OrderableStack`

Display the top message of the stack.

Parameters can be provided:

- label, defaulting to 'Cookies management policy'
- title, defaulting to 'Cookies management policy'
- route, defaulting to configured routePrefix + '/cookies'.

## NPM peer dependencies

Starting with v 0.3.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`. 

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 0.3.0:
```
    'lodash': '^4.17.0'
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
- Last updated on 2023, June 5th
