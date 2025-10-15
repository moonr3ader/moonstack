// ===============================================
// 📘 JavaScript Essentials Handbook
// 👉 What to Know Before Starting DSA & MERN Stack
// ===============================================

// ========================
// 1. VARIABLES & DATA TYPES
// ========================
let age = 21;                  // let = reassignable
const name = "Moon";           // const = fixed
var oldVar = "avoid this";     // var = outdated, use let/const

// Primitive types
let num = 42;                  // number
let str = "Hello JS";          // string
let isLearning = true;         // boolean
let notAssigned;               // undefined
let emptyValue = null;         // null

console.log(typeof num, typeof str, typeof isLearning);


// ========================
// 2. OPERATORS
// ========================
// Arithmetic
console.log("Add:", 5 + 3, "Modulus:", 5 % 2, "Power:", 2 ** 3);

// Comparison
console.log(5 == "5");    // true (loose)
console.log(5 === "5");   // false (strict)


// ========================
// 3. CONDITIONALS
// ========================
let score = 75;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

let dayOfWeek = "Wednesday";
switch (dayOfWeek) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Wednesday":
    console.log("Hump day!");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  default:
    console.log("Just another day.");
}
// Output: Hump day!

// Ternary operator
let pass = (score >= 50) ? "Pass" : "Fail";
console.log(pass);


// ========================
// 4. LOOPS
// ========================
// for
for (let i = 1; i <= 3; i++) console.log("For:", i);

// while
let n = 3;
while (n > 0) { console.log("While:", n); n--; }

// do...while
let x = 0;
do { console.log("Do While:", x); x++; } while (x < 2);

// for...of (arrays)
for (let fruit of ["apple", "banana"]) console.log("Fruit:", fruit);

// for...in (objects)
let person = { name: "Moon", age: 22 };
for (let key in person) console.log(key, ":", person[key]);


// ========================
// 5. FUNCTIONS
// ========================
// Regular function
function greet(user) {
  return "Hello " + user;
}
console.log(greet("Moon"));

// Function expression
const square = function(num) { return num * num; };
console.log("Square:", square(4));

// Arrow function
const add = (a, b) => a + b;
console.log("Add:", add(5, 3));


// ========================
// 6. ARRAYS
// ========================
let nums = [1, 2, 3, 4];
nums.push(5);       // add end
nums.unshift(0);    // add start
nums.pop();         // remove end
nums.shift();       // remove start
console.log("Array:", nums);

// Loop arrays
nums.forEach(n => console.log("ForEach:", n));

// Important methods
let doubled = nums.map(n => n * 2);             // transform
let evens = nums.filter(n => n % 2 === 0);      // filter
let sorted = nums.sort((a, b) => b - a);        // sort (descending)
console.log("Map:", doubled, "Filter:", evens, "Sort:", sorted);


// ========================
// 7. OBJECTS
// ========================
let car = {
  brand: "Tesla",
  year: 2022,
  isElectric: true,
  details: function() {
    return this.brand + " (" + this.year + ")";
  }
};
console.log(car.details());


// ========================
// 8. ES6+ ESSENTIALS
// ========================
// Template literals
let user = "Moon";
console.log(`Hello, ${user}!`);

// Destructuring
let [first, second] = [10, 20];
let { brand, year } = car;
console.log(first, second, brand, year);

// Spread & Rest
let moreNums = [...nums, 100, 200]; // spread
const sumAll = (...args) => args.reduce((a, b) => a + b, 0);
console.log("Spread:", moreNums, "SumAll:", sumAll(1, 2, 3, 4));

// Default params
const multiply = (a, b = 2) => a * b;
console.log("Multiply:", multiply(5));


// ========================
// 9. ERROR HANDLING
// ========================
try {
  throw new Error("Something went wrong!");
} catch (err) {
  console.error("Caught:", err.message);
} finally {
  console.log("Finally always runs");
}


// ========================
// 10. PRACTICE MINI-QUESTS
// ========================

// ❓ Sum of numbers 1–10
let sum = 0;
for (let i = 1; i <= 10; i++) sum += i;
console.log("Sum 1-10:", sum);

// ❓ Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Reverse:", reverseString("hello"));

// ❓ Find max in array
function findMax(arr) {
  let max = arr[0];
  for (let n of arr) if (n > max) max = n;
  return max;
}
console.log("Max:", findMax([2, 7, 1, 9, 5]));

// ❓ Check palindrome
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log("Palindrome (racecar):", isPalindrome("racecar"));


// ===============================================
// 🚀 Congratulations! 
// You now have the essentials needed to:
// - Enter DSA (arrays, loops, functions, logic building)
// - Begin MERN stack (React JSX, Node, Express basics)
// ===============================================