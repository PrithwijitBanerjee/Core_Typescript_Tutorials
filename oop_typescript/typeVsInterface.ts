// 1) type supports intersection, union

// 1) interface only supports intersection, not union

// ex: 

// type Person = {
//     id: number,
//     name: string
// };

// type Employee = {
//     salary: number,
//     designation: string
// };

// type Data = Person | Employee; // union 

// let user: Data = {
//     id: 1,
//     name: 'John Doe'
// }; // no error 

// or, 

// let user: Data = {
//     salary: 8000,
//     designation: 'React JS Developer'
// }; // no error

// type Data = Person & Employee; // intersection both type's attributes are mandatory ...

// let user: Data = {
//     id: 1,
//     name: 'John Doe',
//     designation: 'React JS Developer',
//     salary: 8000
// };



// interface Stu {
//     id: number,
//     name: string,
// };

// interface StuAddr {
//     address: string
// };

// interface Data extends Stu, StuAddr {};

// const stuObj: Data = {
//     id: 1,
//     name: 'John Doe',
//     address: 'Kolkata'
// };


// 2) same name type can not possible
// 2) same name interface can possible 

// type Stu = {
//     id: number,
//     name: string
// };

// type Stu = {
//     age: number
// }; // error: duplicate identifier ...

interface Stu {
    id: number,
    name: string
};

interface Stu {
    age: number
};

const info: Stu = {
    id: 1,
    name: 'John Doe',
    age: 25
};  // no error








