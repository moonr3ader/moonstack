// ================================
// 📘 JavaScript Basics Handbook
// ================================

// 1. VARIABLES
// ----------------
// Use let for reassignable variables, const for fixed values.
let age = 21;
const name = "Moon";

// Example of reassignment
age = 22;
// name = "Reader"; ❌ This would throw an error because 'const' can't be reassigned.

console.log("Name:", name, "Age:", age);


// 2. DATA TYPES
// ----------------
// Primitive types: number, string, boolean, null, undefined
let num = 10;                  // number
let str = "Hello JS";          // string
let isLearning = true;         // boolean
let notAssigned;               // undefined
let nothing = null;            // null

console.log(typeof num, typeof str, typeof isLearning);


// 3. OPERATORS
// ----------------
// Arithmetic: +, -, *, /, %, **
let a = 10, b = 3;
console.log("Add:", a + b, "Modulus:", a % b, "Power:", a ** b);

// Comparison: >, <, >=, <=, ==, ===, !=, !==
console.log(a > b);       // true
console.log(a == "10");   // true (loose equality, type not checked)
console.log(a === "10");  // false (strict equality, type checked)


// 4. CONDITIONALS
// ----------------
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// Ternary operator (short if-else)
let result = (score >= 50) ? "Pass" : "Fail";
console.log("Result:", result);


// 5. LOOPS
// ----------------
// for loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Count:", i);
}

// while loop
let n = 3;
while (n > 0) {
  console.log("While Loop:", n);
  n--;
}

// do...while loop (runs at least once)
let x = 0;
do {
  console.log("Do While:", x);
  x++;
} while (x < 2);

// for...of loop (best for arrays)
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// for...in loop (best for objects)
let person = { name: "Moon", age: 22, job: "Dev" };
for (let key in person) {
  console.log(key, ":", person[key]);
}


// 6. FUNCTIONS
// ----------------
function greet(user) {
  return "Hello " + user + "!";
}
console.log(greet("Moon"));


// Function expression
const square = function(num) {
  return num * num;
};
console.log("Square:", square(4));


// Arrow function (ES6 style, but included here to see evolution)
const add = (x, y) => x + y;
console.log("Add:", add(5, 7));


// 7. ARRAYS
// ----------------
let nums = [1, 2, 3, 4];
console.log("Array Length:", nums.length);

// Add & Remove
nums.push(5);          // add to end
nums.unshift(0);       // add to start
nums.pop();            // remove last
nums.shift();          // remove first
console.log("Updated Array:", nums);

// Looping arrays
nums.forEach(num => console.log("Num:", num));


// 8. OBJECTS
// ----------------
let car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2022,
  isElectric: true
};

// Access
console.log("Brand:", car.brand, "Model:", car["model"]);

// Update
car.year = 2023;
car.color = "red";  // new property
console.log(car);


// 9. PRACTICE MINI-QUESTS
// ----------------
// ❓ Find the sum of numbers 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) sum += i;
console.log("Sum 1-10:", sum);

// ❓ Check if a number is even or odd
function isEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log("7 is:", isEven(7));

// ❓ Find the largest number in an array
let arr = [2, 7, 1, 9, 5];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
console.log("Max:", max);