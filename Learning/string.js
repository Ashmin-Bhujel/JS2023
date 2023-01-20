// Strings in JavaScript
// String is an array of characters

// Declaring a string named "firstName"
let firstName = "Ashmin";
console.log(`First Name: ${firstName}`);

// String indexing
//  [A   s   h   m   i   n]
//  [0   1   2   3   4   5]
// In most programming languages the indexing (positioning) starts from 0

// Printing the index of 'm' character in above string
console.log(`Index of 'm' is ${firstName.indexOf('m')}`);

// String length property
// It returns the length of the string i.e. total number of characters including the spaces
console.log(`Total length of string: ${firstName.length}`);

// Printing the index of last character
// index of last character = length of string - 1
let strLength = firstName.length;
console.log(`Last character is '${firstName[strLength - 1]}' and its index is ${strLength - 1}`);

// Some useful string methods
// NOTE: Strings are immutable. So, string methods returns a copy of the original string
let address = "    Bhaktapur    ";
console.log(`Length of original string: ${address.length}`);

// trim() method
// It removes the unnecessary white spaces
address = address.trim();
console.log(`Length of string after trim: ${address.length}`);

// toUpperCase() method
// It returns a upcased string of the original string
address = address.toUpperCase();
console.log(address);

// toLowerCase() method
// It returns a lowercased string of the original string
address = address.toLowerCase();
console.log(address);

// slice() method
// It returns a sliced string according to given starting index to ending index
// NOTE: It does not includes the character of end index
let sliced = address.slice(0, 6);
console.log(sliced);
// We can also use negative number it just starts indexing from end
console.log(address.slice(-3));

// typeof() operator
// It returns the data type of the given value
let num = 2060;
let myStr = "Hello!";
console.log(typeof(num));
console.log(typeof(myStr));

// Type Conversion

// Number -> String
// Method 1:
// num = num + "";
// console.log(typeof(num));
// Method 2 (Using string constructor):
num = String(num);
console.log(typeof(num));

// String -> Number
// Method 1:
// myStr = +myStr;
// console.log(typeof(myStr));
// Method 2 (Using number constructor):
myStr = Number(myStr);
console.log(typeof(myStr));

// String concatenation
firstName = "Ashmin";
let lastName = "Bhujel";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Template/String literal
// NOTE: prompt() returns string to use input as number we use number constructor
let name = prompt("Enter your name: ");
let age = Number(prompt("Enter your age: "));
let aboutMe = `Hi! My name is ${name} and I'm ${age} years old.`;
console.log(aboutMe);
console.log(typeof(age));