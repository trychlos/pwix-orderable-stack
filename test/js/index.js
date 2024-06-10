// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by orderable-stack.js.
import { name as packageName } from "meteor/pwix:orderable-stack";

// Write your tests here!
// Here is an example.
Tinytest.add( 'orderable-stack - example', function( test ){
    test.equal( packageName, 'orderable-stack' );
});
