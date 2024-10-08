// how to declare object in typescript ...
// let userInfo1: object;
// userInfo1 = "101"; // Error: Type 'string' is not assignable to type 'object'
// userInfo1 = true; // Errror: Type 'boolean' is not assignable to type 'object'
// userInfo1 = { userName: 'John Doe', userId: 101 };
// console.log(userInfo1);
// How to define an Array of object ...
var allUsers = [];
var user1; // declare a variable ...
user1 = { userName: 'John Doe', userId: 101 };
allUsers.push(user1);
var user2; // declare a variable ...
user2 = { userName: 'Jane Doe' };
allUsers.push(user2);
// console.log(allUsers);
for (var _i = 0, allUsers_1 = allUsers; _i < allUsers_1.length; _i++) {
    var user = allUsers_1[_i];
    console.log(user);
}
// The error occurs because you declared the array allUsers with the type object[], which means each element in the array is expected to be of type object, but the object type in TypeScript is a general type that doesn't guarantee the presence of specific properties like userName.
