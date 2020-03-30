"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var indexObj = new index_1["default"]("Kishor", 35, "kishor@gmail.com");
indexObj.testMethod();
//console.log(indexObj.fullName); // Compile Time Error
console.log(indexObj.age);
//console.log(indexObj.emailId); // Compile Time Error
