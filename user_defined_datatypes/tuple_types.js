// tuple: Represents an array with a fixed number of elements, each with a specific type.
// In Typescript, tuple contains heterogenous kind of data as key-value pairs
// declare a tuple ...
var studentIds;
// console.log(studentIds); // error Variable 'studentIds' is used before being assigned. // temporal dead zone
studentIds = ['id', 101];
studentIds.push('id', 102);
console.log(studentIds);
console.log(studentIds[0], ": ", studentIds[1]);
