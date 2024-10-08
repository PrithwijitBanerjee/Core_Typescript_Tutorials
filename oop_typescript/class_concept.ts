// classes are ble-print or, logical representation of an object...
class Student {
    name: string;
    rollNo: number | string;
    constructor(name: string, rollNo: string | number) {
        this.name = name;
        this.rollNo = rollNo;
    };
    display(): void {
        console.log(`Student's Name: ${this.name}, roll no: ${this.rollNo}`);

    };
};

// objects are physical representation of a class ...
const student1 = new Student('John Doe', '101');

const student2 = new Student('Jane Doe', 102);


student1.display();

student2.display();


