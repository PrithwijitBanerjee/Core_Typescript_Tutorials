"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = [];
users.push({ userName: 'John Doe', userId: 101 });
users.push({ userId: 102, userName: 'Jane Doe' });
users.push({ userName: 'Prithwijit Banerjee' });
console.log(users);
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    console.log(user.userName);
}
function redirectReq(requestType) {
    console.log(requestType);
}
;
redirectReq("GET"); // only "GET" or, "POST" or, "PUT" or, "PATCH" are allowed ...
var manager = {
    name: 'Alice',
    role: 'Manager',
    department: 'HR',
    employeesManaged: 10,
};
// Access properties
console.log(manager.name); // Alice
console.log(manager.role); // Manager
console.log(manager.department); // HR
console.log(manager.employeesManaged); // 10
// In this example, we define two types: Employee and Manager. Then, we create an intersection type called ManagerWithEmployeeInfo by combining Employee and Manager using the & operator. The resulting type, ManagerWithEmployeeInfo, has all the properties of both Employee and Manager.
// When we create an object (manager) that conforms to the ManagerWithEmployeeInfo type, it must have all the properties defined in both Employee and Manager. This allows us to create objects that have a combination of properties from different types, providing flexibility and type safety.
// Intersection types are especially useful when you want to compose types to represent complex objects or data structures in your TypeScript code.
