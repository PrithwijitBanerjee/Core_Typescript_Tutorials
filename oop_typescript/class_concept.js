// classes are ble-print or, logical representation of an object...
var Student = /** @class */ (function () {
    function Student(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    ;
    Student.prototype.display = function () {
        console.log("Student's Name: ".concat(this.name, ", roll no: ").concat(this.rollNo));
    };
    ;
    return Student;
}());
;
// objects are physical representation of a class ...
var student1 = new Student('John Doe', '101');
var student2 = new Student('Jane Doe', 102);
student1.display();
student2.display();
