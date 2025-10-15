// es6-handbook.js
// -----------------------------
// ES6 Handbook - Quick reference + mini exercises
// Save this file and open in Node (v12+) or any modern browser console.
// Sections:
// 1) Variables: let / const
// 2) Arrow functions
// 3) Template literals
// 4) Destructuring (arrays & objects)
// 5) Default parameters
// 6) Rest & Spread (arrays / function params)
// 7) Classes (basic)
// 8) Modules (example exports / imports - shown as comments)
// 9) Promises (basic) & fetch pattern (commented)
// 10) Map, Set (ES6 collections)
// 11) Array helpers: map, filter, reduce
// -----------------------------

/* -----------------------------------------------------------------------
   1) let / const
   - const for values that won't be reassigned
   - let for block-scoped variables that may change
   ----------------------------------------------------------------------- */
const PI = 3.14159;
let counter = 0;

counter += 1; // ✅ allowed
// PI = 3.14; // ❌ would throw (reassignment not allowed)

/* Mini exercise:
   Create a const object and try to change a property (allowed),
   then try to reassign the constant (not allowed).
*/
// Answer:
// const obj = { a: 1 };
// obj.a = 2; // allowed
// obj = {}; // TypeError: Assignment to constant variable.

/* -----------------------------------------------------------------------
   2) Arrow functions
   - shorter syntax
   - lexical `this` (doesn't create new `this`)
   ----------------------------------------------------------------------- */
const add = (a, b) => a + b;
const square = x => x * x;

// with block body:
const sumAndLog = (a, b) => {
  const s = a + b;
  console.log('sum:', s);
  return s;
};

/* Exercise: convert
   function multiply(a, b) { return a*b; }
   into an arrow function.
*/
// Answer: const multiply = (a, b) => a * b;

/* -----------------------------------------------------------------------
   3) Template literals
   - backticks ` ` allow interpolation and multi-line strings
   ----------------------------------------------------------------------- */
const name = 'Ava';
const greeting = `Hello ${name}!
Welcome to ES6 handbook.`;
/* console.log(greeting); */

/* -----------------------------------------------------------------------
   4) Destructuring (arrays & objects)
   - unpack values easily
   ----------------------------------------------------------------------- */
// Array destructuring
const nums = [10, 20, 30];
const [first, second, third] = nums; // first=10, second=20

// Object destructuring
const user = { id: 1, username: 'moon', meta: { active: true } };
const { id, username } = user;

// Default values while destructuring
const [a = 0, b = 0, c = 0, d = 5] = [1, 2];
// a=1 b=2 c=0 d=5

/* Exercise:
   Given const settings = { theme: 'dark' }, extract theme and language with default 'en'.
*/
// Answer:
// const settings = { theme: 'dark' };
// const { theme, language = 'en' } = settings;

/* -----------------------------------------------------------------------
   5) Default parameters
   - functions can have default arg values
   ----------------------------------------------------------------------- */
function greet(user = 'Guest') {
  return `Hi, ${user}!`;
}
/* greet(); // "Hi, Guest!" */

/* -----------------------------------------------------------------------
   6) Rest & Spread
   - Rest collects arguments into an array
   - Spread expands arrays (or objects in modern JS) into elements
   ----------------------------------------------------------------------- */
// Rest parameters
const sumAll = (...numsList) => numsList.reduce((s, n) => s + n, 0);
// sumAll(1,2,3) => 6

// Spread (arrays)
const a1 = [1, 2];
const a2 = [3, 4];
const combined = [...a1, ...a2]; // [1,2,3,4]

// Copying arrays (shallow copy)
const copy = [...combined];

/* Exercise:
   Write function joinStrings(separator, ...parts) that joins parts using separator.
*/
// Answer:
// const joinStrings = (separator, ...parts) => parts.join(separator);

/* -----------------------------------------------------------------------
   7) Classes (ES6 syntax)
   - syntactic sugar over prototypes
   ----------------------------------------------------------------------- */
class Resource {
  constructor(title, category, rating = 0) {
    this.title = title;
    this.category = category;
    this.rating = rating;
  }

  info() {
    return `${this.title} (${this.category}) - ${this.rating}★`;
  }

  updateRating(r) {
    this.rating = r;
  }
}

// Example usage:
// const r = new Resource('JS Basics', 'JavaScript', 4.5);
// console.log(r.info());

/* -----------------------------------------------------------------------
   8) Modules (ES6)
   - export / import syntax (works in bundlers or node with "type": "module")
   - example (uncomment and put in separate files when using modules)
   ----------------------------------------------------------------------- */
// // export in resource.js
// export class Resource { ... }

// // import in app.js
// import { Resource } from './resource.js';

/* -----------------------------------------------------------------------
   9) Promises & async pattern (basic)
   ----------------------------------------------------------------------- */
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// Using promise
wait(100).then(() => {
  // console.log('100ms passed');
});

// Async/await usage (modern)
async function demoAsync() {
  await wait(50);
  return 'done';
}
// demoAsync().then(console.log);

/* Fetch pattern (browser)
/*
async function fetchJson(url){
  const res = await fetch(url);
  if(!res.ok) throw new Error('Network error');
  return res.json();
}
*/

/* -----------------------------------------------------------------------
   10) Map & Set (ES6 collections)
   ----------------------------------------------------------------------- */
// Map: key-value store (any key types)
const m = new Map();
m.set('a', 1);
m.set(2, 'two');
// m.get('a') -> 1

// Set: unique values
const s = new Set([1, 2, 2, 3]); // contains 1,2,3

/* Exercise:
   Given an array arr = [1,2,2,3], remove duplicates using Set.
*/
// Answer: const unique = [...new Set([1,2,2,3])]; // [1,2,3]

/* -----------------------------------------------------------------------
   11) Array helpers: map, filter, reduce (common patterns)
   ----------------------------------------------------------------------- */
const resources = [
  { title: 'JS Basics', category: 'JS', rating: 4.5 },
  { title: 'React Intro', category: 'React', rating: 4.7 },
  { title: 'CSS Tips', category: 'CSS', rating: 4.2 },
];

// map -> transform
const titles = resources.map(r => r.title);

// filter -> select
const highRated = resources.filter(r => r.rating >= 4.5);

// reduce -> aggregate (sum ratings)
const totalRating = resources.reduce((acc, r) => acc + r.rating, 0);
const avgRating = totalRating / resources.length;

/* Mini Exercise:
   1) Return titles of JS resources only.
   2) Count how many resources have rating >= 4.5
*/
// Answers:
// 1) const jsTitles = resources.filter(r => r.category === 'JS').map(r => r.title);
// 2) const countHigh = resources.filter(r => r.rating >= 4.5).length;

/* -----------------------------------------------------------------------
   Extras: small utilities often handy during coding interviews
   ----------------------------------------------------------------------- */

// Swap two variables (using destructuring)
let x = 1, y = 2; [x, y] = [y, x]; // x=2, y=1

// Flatten 2D array (one level)
const flattenOne = arr2d => arr2d.reduce((acc, row) => acc.concat(row), []);

// Check if array contains value (ES6 includes)
const hasVal = (arr, v) => arr.includes(v);

/* -----------------------------------------------------------------------
   Export (optional)
   If using Node with modules enabled or a bundler, you could export helpers:
   ----------------------------------------------------------------------- */
const ES6 = {
  add,
  square,
  sumAll,
  Resource,
  wait,
  flattenOne,
  hasVal,
};
export default ES6; // if your environment supports ES module exports

// Note: If you're not using modules, remove the export line and use the file as a script.
// -----------------------------
// End of es6-handbook.js
