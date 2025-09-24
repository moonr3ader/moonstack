// Basic JS Handbook 

// - DSA is problem-solving → you’ll use arrays, strings, loops, and functions in every problem.
// - Objects → useful for hashmaps/dictionaries (very common in DSA).
// - ES6 features (destructuring, spread) → make code cleaner, not mandatory but very handy.

/* 
✅ VARIABLES & DATA TYPES ------------------------------------------------
 - let, const, var (use let/const mostly).
 - Data types: number, string, boolean, null, undefined, object, array.
 - to check the data type of a variable: typeof fullName
--------------------------------------------------------------------------*/

let age = 21;                       //number (int/float/double, all included)
let name = "Alice";                 // string
let isStudent = true;               // boolean
let colors = ["red", "blue"];       // array

// PRINTING VALUES IN CONSOLE
console.log(age);                   // 21
age = 50;                           // cannot redeclare, but can be update //block-scope variable
console.log(age);                   // 50
const pi = 3.14;                    //cannot be redeclared or updated //Block-scope variable
console.log(pi);                    // 3.14

var c = 7;                          //can redeclared n updated //Global-scope variable
console.log(c);                     // 7
var c = 0;                          //no error will show
console.log(c);                     // 0

console.log(typeof age);


/* ✅ OPERATORS ----------------------------------------------------------
 - Arithmetic: + - * / % **
 - Comparison: == === != !== < > <= >=
 - Logical: && || !
--------------------------------------------------------------------------*/

let x = 10, y = 20;
console.log(x < y && y > 15);      // true

/* ✅ CONDITIONALS -------------------------------------------------------
- if, else if, else
 - switch (optional for DSA, but useful)
--------------------------------------------------------------------------*/
if (x > y) {
  console.log("x is bigger");
} else {
  console.log("y is bigger");
}

// ✅ LOOPS (for, while, for...of)-----------------------------------------
// for loop → classic counter loop
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// while loop → repeat until condition is false
let cookies = 3;
while (cookies > 0) {
  console.log(`Eating a cookie... ${cookies} left`);
  cookies--; // take one out
}
                                    // Output:
                                    // Eating a cookie... 3 left
                                    // Eating a cookie... 2 left
                                    // Eating a cookie... 1 left

// do...while loop → run at least once
let num = 0;
do {
  console.log("This runs at least once!");
  num++;
} while (num < 3);
                                    // Output:
                                    // This runs at least once!
                                    // This runs at least once!
                                    // This runs at least once!

//for...of loop → loop through arrays/iterables
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}
                                    // Output:
                                    // apple
                                    // banana
                                    // orange

// for...in loop → loop through object keys
let person1 = { name: "Alice", age: 25, city: "London" };
for (let key in person1) {
  console.log(`${key}: ${person1[key]}`);
}
                                    // Output:
                                    // name: Alice
                                    // age: 25
                                    // city: London

// forEach() → array helper loop
let nums = [1, 2, 3, 4];
nums.forEach(num => {
  console.log(num * 2);
});
                                    // Output:
                                    // 2
                                    // 4
                                    // 6
                                    // 8
//--------------------------------------------------------------------------


/* ✅ FUNCTIONS (return values, parameters)-------------------------------
- Function declaration
- Function expression / arrow function
- Parameters & return
--------------------------------------------------------------------------*/

function add(a, b) {
  return a + b;
}
let multiply = (a, b) => a * b;
console.log(add(2, 3));             // 5
console.log(multiply(2, 3));        // 6


/* ✅ ARRAYS (push, pop, map, filter, sort, forEach)----------------------
- Creation and Access, Methods - .push(), .pop(), .shift(), .unshift()
- Iteration: .forEach(), .map(), .filter(), .sort()
--------------------------------------------------------------------------*/
let numArr = [1, 2, 3];
numArr.push(4); // [1, 2, 3, 4]

/* ✅ STRINGS (length, includes, substring, split/join)----------------------------------------
- Basics: .length, indexing (str[i])
- Common methods: .toUpperCase(), .toLowerCase(), .includes(), .substring(), .split(), .join()
-----------------------------------------------------------------------------------------------*/
let word = "hello";
console.log(word.toUpperCase());      // "HELLO"

/* ✅ OBJECTS (key-value, looping)------------------------------------------------
- Key-value pairs
- Access with dot . and bracket []
- Loop with for...in or Object.keys()
- declaring object and its value, key : value
- type student in browser console and can see the details stored here
- how come in obj though declared in const can re-assign values?
   - const variables cannot change value, but const object's keys you can change
----------------------------------------------------------------------------------*/
let person2 = {
    age:30,
    name: "Alice",
    isStudent: false,
    colors: ["black", "white"],
};
console.log(person2.name);                      // "Alice"
console.log(person2);                           //print all of object
person2["name"] = "Jane Doe";                   //changing value in object
console.log(person2["name"]);                   //printing a certain value from object

/* ✅ ES6 (ECMAScript 2015) basics --------------------------------------
ES6 Essentials: 
- Destructuring arrays & objects
- Spread/rest operators
- Template literals (backticks ``)
--------------------------------------------------------------------------*/
let arr1 = [1, 2, 3];
let [a, b] = arr1; // a=1, b=2