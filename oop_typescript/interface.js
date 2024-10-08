"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var users = [];
users.push({
    id: 1,
    name: 'John Doe',
    age: 27
}, { id: 1, name: 'Jane Doe', age: 23 });
// console.log(users);
var printUser = function (user) {
    console.log("Name = ".concat(user.name, ", Id = ").concat(user.id, ", age = ").concat(user.age));
};
users.forEach(function (user) {
    printUser(user);
});
;
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        this.sleep = function () {
            console.log('Every Person needs sleep for a certain time being...');
        };
    }
    ;
    return Student;
}());
;
var stu = new Student('John Doe');
console.log(stu.name);
stu.sleep();
