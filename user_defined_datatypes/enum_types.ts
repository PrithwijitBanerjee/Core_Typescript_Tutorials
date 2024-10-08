// enum: Represents a set of named constants. no duplicate data.

// types of enum in typescript: 1) numeric enum, 2) string enum, and 3) heterogenous enum ...

// numeric enum ...
// enum statusCode {
//     getData,
//     readData,
//     writeData
// };

// console.log(statusCode);

// o/p: {
//     '0': 'getData',
//     '1': 'readData',
//     '2': 'writeData',
//     getData: 0,
//     readData: 1,
//     writeData: 2
//   }


// enum statusCode {
//     getData = 1,
//     readData,
//     writeData
// };

// console.log(statusCode);

// o/p: {
//     '1': 'getData',
//     '2': 'readData',
//     '3': 'writeData',
//     getData: 1,
//     readData: 2,
//     writeData: 3
//   }


// enum statusCode {
//     getData = 1,
//     readData = 3,
//     writeData
// };

// console.log(statusCode);

// o/p: {
//     '1': 'getData',
//     '3': 'readData',
//     '4': 'writeData',
//     getData: 1,
//     readData: 3,
//     writeData: 4
//   }


// string enum ...

enum STATUSES {
    LOADING = 'loading',
    IDLE = 'idle',
    ERROR = 'error'
};

console.log(STATUSES);

// console.log(STATUSES.LOADING);

// console.log(STATUSES['IDLE']);

// STATUSES.ERROR = 'REJECTED'; // error Cannot assign to 'ERROR' because it is a read-only property.


// Hybrid enum 

enum mixedEnum {
    PI = 3.14,
    LOADING = 'loading',
    IDLE = 'idle',
    ERROR = 'error'
};

console.log(mixedEnum);
