// built-in types : number, string, boolean, void, null, undefined, never 


// number: Represents both integer and floating-point numbers.

let num: number = 20;

const PI: number = 3.14;

console.log(num, PI);

// string: Represents a sequence of characters.
let fullName: string = 'John Doe';

// boolean: Represents a true or false value.
let isBannedUsr: boolean = true;

// any: Represents a dynamic or untyped value. Avoid using this when possible, as it bypasses type checking. if you have no knowledge about the variable type use any type: user input values

let data: any = 42;
data = 'Hello';

let password: any;
let passwords: any[];


// void: Represents the absence of a value, typically used as the return type of functions that don't return anything.

function logMessage(): void {
    console.log('This is a log message.');
}



// never: Represents a value that never occurs, such as a function that throws an error or an infinite loop.

function throwError(message: string): never {
    throw new Error(message);
}


// these basic types provide a foundation for specifying the types of variables and data in TypeScript. You can use them to ensure type safety in your code and catch type-related errors at compile time.

// inferred Typing

let userName = 'anis'; // data type inferred as string