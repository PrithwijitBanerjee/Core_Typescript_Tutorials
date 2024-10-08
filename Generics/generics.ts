
// without generics ...
function identity(arg: any): any {
    return arg;
}

// loosing our information ... 
console.log(typeof (100)); // any

console.log(typeof ("hello")); //any 













// with generics ...

const demo = <T extends object>(obj: T): T => {
    const id = 1;
    return { ...obj, id };
};

const user = demo({
    name: 'John Doe',
    age: 27
});

// let x = demo("hwllo"); // error 


interface APIResponse<T> {
    statusCode: number,
    statusMessage: string,
    data: T
};

let response: APIResponse<object> = {
    statusCode: 200,
    statusMessage: "success",
    data: {
        something: "ccc"
    }
}