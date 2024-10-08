
// Abstract class - abstraction helps us to hide the implementation of something. class declared with abstract keyword. object can not be created from abstract class. if a class extends abstract class; it must inherit all the abstract methods


abstract class User {
    userName: string;
    age: number;
    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }
    abstract display(): void;
    getInfo(): void {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
};


class Student extends User {
    studentId: number | string;
    constructor(userName: string, age: number, studentId: number | string) {
        super(userName, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log(
            `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
        );
    }
};


const student = new Student('John Doe', 27, 's101');

student.display();
student.getInfo();













