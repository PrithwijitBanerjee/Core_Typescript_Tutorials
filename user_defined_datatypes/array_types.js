// array: Represents an array of values of a specific type. 2 ways to declare: number[] or Array<number>
var numbers = [1, 2, 3, 4, 5];
// let users = ["anis", "rabu", "pinky"];
// let users: string[];
// users = ["anis", "rabu", "pinky"];
var users;
users = ['anis', 'rabu', 'pinky'];
// for (let index = 0; index < users.length; index++) {
//   const element = users[index];
//   console.log(element);
// }
// users.forEach((element) => {
//   console.log(element);
// });
users.sort();
console.log(users);
users.push('limon');
console.log(users);
users.pop();
console.log(users);
users.unshift('milton');
console.log(users);
users.shift();
console.log(users);
// multi-types array
// let users: (number | string)[];
// users = [10, "anis", 25, 35, "islam"];
var shopping_carts = [
    {
        id: 'p101',
        pName: 'Mobile',
        price: 10000
    },
    {
        id: 'p102',
        pName: 'Watch',
        price: 5000
    }
];
console.log(shopping_carts);
