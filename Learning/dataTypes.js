// Datatypes in JavaScript

// Primitive Data Types in JavaScript
// 1. number
// 2. string
// 3. boolean
// 4. undefined
// 5. null
// 6. bigint
// 7. symbol

// Number
let myNum = 19;
console.log(typeof(myNum));

// String
let myName = "Ashmin";
console.log(typeof(myName));

// Boolean
let isJavaScriptFun = true;
console.log(typeof(isJavaScriptFun));

// Undefined
// NOTE: An variable whose value is not initialized stores undefined as it data value
let notInitialized;
console.log(typeof(notInitialized));

// NULL
// NOTE: null means nothing
let nothing = null;
console.log(typeof(nothing));
// NOTE: Type of null returns object and its the most famous bug in JavaScript because fixing it may cause the chaos

// BigInt
// NOTE: There is max limit for numbers in JavaScript So, we use bigint datatype to fix that
console.log(`The max limit of number in JavaScript is ${Number.MAX_SAFE_INTEGER}`);
// Method 1 (Using 'n' after the number):
let bigNumber1 = 123456789n;
console.log(bigNumber1);
// Method 2 (Using BigInt constructor):
let bigNumber2 = BigInt(987654321);
console.log(bigNumber2);
console.log(typeof(bigNumber1), typeof(bigNumber2));

// Symbol (To be continued...)

// Reference Datatypes (To be continued...)