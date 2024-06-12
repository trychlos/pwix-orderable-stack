# pwix:orderable-stack

## What is it ?

This Meteor packages defines an `IOrderableStack` interface and provides a `OrderableStack` implementation of this interface.

_Note: this could be as well just a pure NPM package (todo #1: to do some day)._

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

## Provides

The `Stack` global object provides following items:

### Methods

#### `Stack.configure()`

See above.

#### `Stack.i18n.namespace()`

A function which returns the i18n namespace used by the package. Used to add translations at runtime.

### Classes

#### `Stack.Orderable`

A pure virtual class which implements the `IOrderable` interface.

This class MUST be derived, and a `IOrderableCompare()` function MUST be provided by the derived class.

#### `Stack.OrderableStack`

A class which implements the `IOrderableStack` interface.

#### `Stack.Stack`

A class which implements the `IStack` interface.

### Interfaces

#### `Stack.IOrderable`

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

#### `Stack.IOrderableStack`

An interface which manages an `IStack` of `IOrderable`'s.

It provides following methods:

- `IOrderableStackLast()`

    Returns the topmost object of the stack in the semantic order as provided by `IOrderable` interface.

#### `Stack.IStack`

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

## NPM peer dependencies

Starting with v 0.3.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`.

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
