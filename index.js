"use strict";
exports.__esModule = true;
var index = /** @class */ (function () {
    function index(fullName, age, emailId) {
        this.age = age;
        this.emailId = emailId;
        this._fullName = null;
        this._fullName = fullName;
    }
    index.prototype.testMethod = function () {
        console.log(this._fullName);
        console.log(this.age);
        console.log(this.emailId);
    };
    return index;
}());
exports["default"] = index;
