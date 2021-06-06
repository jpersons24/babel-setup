"use strict";

// variables declated using both ES% and ES6 syntax
// ES5
var first = "create npm project using npm init";

// ES6
var second = "check to make sure package.json was created";
var third = "move on to next step: npm setup";

// template literal introduced with ES6
var instructions = "To start an npm project, first " + first + ". Second, " + second + ". Finally, " + third + ".";

console.log(instructions);