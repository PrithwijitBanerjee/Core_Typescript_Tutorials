// how to declare object in typescript ...
// let userInfo1: object;

// userInfo1 = "101"; // Error: Type 'string' is not assignable to type 'object'

// userInfo1 = true; // Errror: Type 'boolean' is not assignable to type 'object'


// userInfo1 = { userName: 'John Doe', userId: 101 };

// console.log(userInfo1);


// How to define an Array of object ...
const allUsers: object[] = [];


let user1: {
    userName: string,
    userId: number
}; // declare a variable ...

user1 = { userName: 'John Doe', userId: 101 };

allUsers.push(user1);

let user2: {
    userName: string,
    userId?: number
}; // declare a variable ...

user2 = { userName: 'Jane Doe' };

allUsers.push(user2);

// console.log(allUsers);


for (let user of allUsers) {
    console.log(user);
}


// The error occurs because you declared the array allUsers with the type object[], which means each element in the array is expected to be of type object, but the object type in TypeScript is a general type that doesn't guarantee the presence of specific properties like userName.
