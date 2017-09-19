// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by reactive-dict-invalidate-key.js.
import { name as packageName } from "meteor/liberation:reactive-dict-invalidate-key";

// Write your tests here!
// Here is an example.
Tinytest.add('reactive-dict-invalidate-key - example', function (test) {
  test.equal(packageName, "reactive-dict-invalidate-key");
});
