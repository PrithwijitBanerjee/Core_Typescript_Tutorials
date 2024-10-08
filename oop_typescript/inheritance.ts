
class User {
    userName: string;
    userId: number | string;
    constructor(userName: string, userId: number | string) {
        this.userName = userName;
        this.userId = userId;
    };
    display(): void {
        console.log(`User Name: ${this.userName}, User Id: ${this.userId}`);
    }
}

class Student extends User {
    marks: number;
    constructor(userName: string, userId: number | string, marks: number) {
        super(userName, userId);
        this.marks = marks;
    }
    display(): void { // method overriding ...
        super.display();
        console.log(`User Name: ${this.userName}, User Id: ${this.userId}, Students Marks: ${this.marks}`);
    }
};

// objects are physical representation of a class ...
const student1 = new Student('John Doe', '101', 45);
const user = new User('Jane Doe', 123);
student1.display(); // dynamic binding 

user.display(); // dynamic binding 









