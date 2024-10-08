export {}
// using interface as type ...
interface IUser {
    id: number,
    name: string,
    age: number
};

const users: IUser[] = [];

users.push({
    id: 1,
    name: 'John Doe',
    age: 27
}, { id: 1, name: 'Jane Doe', age: 23 });

// console.log(users);

const printUser = (user: IUser): void => {
    console.log(`Name = ${user.name}, Id = ${user.id}, age = ${user.age}`);
}

users.forEach(user => {
    printUser(user);
});


// interface as class object ...

interface IPerson {
    name: string;
    sleep: () => void;
};

class Student implements IPerson {
    constructor(public name: string) {};
    sleep = () => {
        console.log('Every Person needs sleep for a certain time being...'); 
    }
};

const stu = new Student('John Doe');

console.log(stu.name);

stu.sleep();
