abstract class Person {
    private _name: string;
    private _age: number;
    constructor(_name: string, _age: number) {
        this._name = _name;
        this._age = _age;
    };
    get name(): string {
        return this._name;
    };
    get age(): number {
        return this._age;
    };

    // abstract method ...
    abstract getDescription(): void;
};

class Teacher extends Person {
    private _subject: string;
    constructor(_name: string, _age: number, _subject: string) {
        super(_name, _age);
        this._subject = _subject;
    };
    get subject(): string {
        return this._subject;
    };

    // Implementing abstract method (Polymorphism)
    getDescription(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, and Subject: ${this.subject}`);
    };

}

class Student extends Person {
    private _grade: number;
    constructor(_name: string, _age: number, _grade: number) {
        super(_name, _age);
        this._grade = _grade;
    };
    get grade(): number {
        return this._grade;
    };

    // Implementing abstract method (Polymorphism)
    getDescription(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, and Grade: ${this.grade}`);
    };
}


// Create instances and demonstrate polymorphism
const student = new Student("Alice", 20, 90);
const teacher = new Teacher("Bob", 45, "Mathematics");

console.log(student.getDescription()); // Student: Alice, Age: 20, Grade: 90
console.log(teacher.getDescription()); // Teacher: Bob, Age: 45, Subject: Mathematics


// Encapsulation: attempting to access private properties directly will result in an error
// console.log(student._name); // Error: Property '_name' is private and only accessible within class 'Person'.
// console.log(teacher._subject); // Error: Property '_subject' is private and only accessible within class 'Teacher'.

// Use getter methods to access encapsulated properties
console.log(student.name); // Alice
console.log(teacher.subject); // Mathematics