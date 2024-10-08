/** What is Type Annotations **/
/** It is a way to define a type of a variable explicitly so that the variable can accept value based on specified type, no other types are allowed **/


// number data types : In typescript, number data types represents both integer as well as floating point numbers

let integerNum: number = 10;

let floatNum: number = 13.45;

let example: number = NaN;

console.log(example);


console.log(floatNum);

console.log(integerNum);


// string datatype: it is represented by single quote or diuble quote

let firstName: string = 'Prithwijit';

let lastName: string = 'Banerjee';

let fullName: string = firstName + ' ' + lastName;

console.log(fullName);






// Here is the Home Work Guys 

// todo   Substring: 
// Declare a variable longText of type string and assign it a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText.

const longText: string = 'Javascript is a single threaded language. In Node JS enviroment, we can run JS on server side enviroment.';
const shortText: string = longText.substring(0, 10);
console.log(shortText);


//  todo   String Comparison: 
// Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.

const str1: string = "MEAN";

const str2: string = 'MERN';

console.log(str1 === str2); // false


//  todo   String Template: 
// Declare variables product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is priced at {price} dollars."

const product: string = 'Apple Smart Watch';

let price: number = 799.50;

console.log(`The product ${product} is priced at $${price}.`);



// 🔷 Boolean Type:
// We start by explaining the Boolean type in Typescript and demonstrate how it is used to represent logical values, such as true or false. You'll see real-world scenarios where Boolean values are essential, along with insights into how Typescript handles type checking for Boolean values.

const isEven = (a: number): boolean => {
    return a % 2 === 0;
}

console.log(isEven(21));

const isDivisibleBy4And8 = (a: number): boolean => {
    // if(a % 4 === 0 || a % 8 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return (a % 4 === 0 || a % 8 === 0);
};

console.log(isDivisibleBy4And8(20));


// 🔶 Bigint Type:
// Next, we explore the Bigint type, which is specifically designed to handle large integer values that exceed the maximum value of the regular number type. We discuss the purpose of Bigint and present practical examples where it is more appropriate and beneficial than using regular number types.

// JS does not handle large number like 2^53 + 1, in this case we use bigInt number suffix as n...

const integerRange = (Number as any).MAX_SAFE_INTEGER;

// console.log(integerRange);

// let largeNumber:bigint = BigInt("9007199254740991");

// console.log(largeNumber);




