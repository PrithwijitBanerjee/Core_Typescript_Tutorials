export { }

// Custom Type: you can create your own type

type User = {
    userName: string,
    userId?: number // optional field ...
};

const users: User[] = [];


users.push({ userName: 'John Doe', userId: 101 });

users.push({ userId: 102, userName: 'Jane Doe' });

users.push({ userName: 'Prithwijit Banerjee' });


console.log(users);

for (let user of users) {
    console.log(user.userName);

}


type RequestTypes = "GET" | "POST" | "PUT" | "PATCH";


function redirectReq(requestType: RequestTypes): void {
    console.log(requestType);

};

redirectReq("GET"); // only "GET" or, "POST" or, "PUT" or, "PATCH" are allowed ...





// Intersection: In TypeScript, you can use intersection types to combine multiple types into a single type that has all the properties and methods of each type. Intersection types are created using the & operator. Here's an example:


// define two types ...

type Employee = {
    name: string,
    role: string
};

type Manager = {
    department: string,
    employeesManaged: number;
};

// Create an intersection type
type ManagerWithEmployeeInfo = Employee & Manager;


const manager: ManagerWithEmployeeInfo = {
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