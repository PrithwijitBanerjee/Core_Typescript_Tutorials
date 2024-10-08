"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.identity = function () {
        console.log('Every person has an identity');
    };
    Person.prototype.sleep = function () {
        console.log('Every Person sleep');
    };
    return Person;
}());
;
var person = new Person();
person.identity();
person.sleep();
