// ===============================
// 📝 JavaScript Collections Cheatsheet (Demo Style)
// STL (C++) / Java Collections → JavaScript
// ===============================

// -------------------------------
// 1. Arrays → Vector / ArrayList
// -------------------------------
console.log("=== Array Demo ===");
let arr = [1, 2, 3];
arr.push(4);         // add to end
arr.unshift(0);      // add to front
console.log("Array after push/unshift:", arr);
arr.pop();           // remove last
arr.shift();         // remove first
console.log("Array after pop/shift:", arr);
console.log("Element at index 1:", arr[1]);
console.log("Array length:", arr.length);
arr.sort((a, b) => a - b); 
console.log("Sorted ascending:", arr);
arr.sort((a, b) => b - a);
console.log("Sorted descending:", arr);
for (let x of arr) console.log("Iter Array:", x);

// -------------------------------
// 2. Map → HashMap / unordered_map
// -------------------------------
console.log("\n=== Map Demo ===");
let map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log("Map get 'a':", map.get("a"));
console.log("Map has 'b':", map.has("b"));
console.log("Map size:", map.size);
map.delete("a");
console.log("Map after delete:", map);
for (let [k, v] of map) console.log("Iter Map:", k, v);

// -------------------------------
// 3. Object → Dictionary (older style)
// -------------------------------
console.log("\n=== Object Demo ===");
let obj = { a: 1, b: 2 };
obj.c = 3;
console.log("Object access a:", obj["a"]);
delete obj.b;
console.log("Object after delete:", obj);
for (let key in obj) console.log("Iter Object:", key, obj[key]);

// -------------------------------
// 4. Set → HashSet / unordered_set
// -------------------------------
console.log("\n=== Set Demo ===");
let set = new Set();
set.add(1);
set.add(2);
set.add(2);  // duplicate ignored
console.log("Set has 1:", set.has(1));
console.log("Set size:", set.size);
set.delete(1);
console.log("Set after delete:", set);
for (let val of set) console.log("Iter Set:", val);

// -------------------------------
// 5. Stack (LIFO)
// -------------------------------
console.log("\n=== Stack Demo ===");
let stack = [];
stack.push(1);
stack.push(2);
console.log("Stack before pop:", stack);
console.log("Stack pop:", stack.pop());
console.log("Stack after pop:", stack);

// -------------------------------
// 6. Queue (FIFO)
// -------------------------------
console.log("\n=== Queue Demo ===");
let queue = [];
queue.push(1);
queue.push(2);
console.log("Queue before shift:", queue);
console.log("Queue dequeue:", queue.shift());
console.log("Queue after shift:", queue);

// -------------------------------
// 7. Deque (Double-ended Queue)
// -------------------------------
console.log("\n=== Deque Demo ===");
let deque = [];
deque.push(1);       // add back
deque.unshift(0);    // add front
console.log("Deque after push/unshift:", deque);
console.log("Deque pop:", deque.pop());
console.log("Deque shift:", deque.shift());
console.log("Deque final:", deque);

// -------------------------------
// 8. Algorithms (like STL)
// -------------------------------
console.log("\n=== Algorithms Demo ===");
let nums = [1, 2, 3, 4];
console.log("Original nums:", nums);
console.log("Squared:", nums.map(x => x * x));
console.log("Evens:", nums.filter(x => x % 2 === 0));
console.log("Sum:", nums.reduce((a, b) => a + b, 0));
console.log("Find > 2:", nums.find(x => x > 2));
console.log("All > 0:", nums.every(x => x > 0));
console.log("Any > 3:", nums.some(x => x > 3));

// -------------------------------
// 9. Iteration Patterns
// -------------------------------
console.log("\n=== Iteration Demo ===");
// Array
for (let x of arr) console.log("Iter Array:", x);

// Map
for (let [k, v] of map) console.log("Iter Map:", k, v);

// Set
for (let val of set) console.log("Iter Set:", val);

// Object
Object.keys(obj).forEach(k => console.log("Iter Object:", k, obj[k]));