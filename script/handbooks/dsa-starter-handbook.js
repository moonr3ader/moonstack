// ===============================================
// 📘 DSA Starter Handbook (JavaScript Edition)
// 👉 Bridge between JS Basics and DSA
// ===============================================

// ========================
// 1. TIME COMPLEXITY BASICS
// ========================

// Example: Sum numbers 1 to n
function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {  // runs n times
    sum += i;
  }
  return sum; // O(n) time
}
console.log("SumToN(5):", sumToN(5));

// Constant time example
function getFirstElement(arr) {
  return arr[0]; // O(1)
}
console.log("First element:", getFirstElement([10, 20, 30]));

// Quadratic example
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]); // O(n^2)
    }
  }
}
console.log("Pairs of [1,2,3]:");
printPairs([1, 2, 3]);


// ========================
// 2. BASIC ARRAY PROBLEMS
// ========================

// ❓ Find the maximum element
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}
console.log("Max:", findMax([2, 7, 1, 9, 5]));

// ❓ Reverse an array
function reverseArray(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++; right--;
  }
  return arr;
}
console.log("Reverse:", reverseArray([1, 2, 3, 4, 5]));


// ========================
// 3. SEARCHING
// ========================

// Linear Search (O(n))
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
console.log("Linear Search (7):", linearSearch([1, 4, 7, 9], 7));

// Binary Search (O(log n)) -> Array must be sorted
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log("Binary Search (9):", binarySearch([1, 4, 7, 9, 11], 9));


// ========================
// 4. SORTING
// ========================

// Bubble Sort (O(n^2))
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log("Bubble Sort:", bubbleSort([5, 2, 9, 1, 5, 6]));

// Built-in sort (uses Timsort → O(n log n))
let arr = [5, 2, 9, 1, 5, 6];
console.log("Built-in Sort:", arr.sort((a, b) => a - b));


// ========================
// 5. RECURSION BASICS
// ========================

// ❓ Factorial
function factorial(n) {
  if (n === 0) return 1;       // base case
  return n * factorial(n - 1); // recursive step
}
console.log("Factorial(5):", factorial(5));

// ❓ Fibonacci
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci(6):", fibonacci(6));


// ========================
// 6. PRACTICE MINI-QUESTS
// ========================

// ❓ Check if array is sorted
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}
console.log("Is Sorted:", isSorted([1, 2, 3, 4, 5]));

// ❓ Two Sum (find indices of two numbers that add up to target)
function twoSum(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[arr[i]] = i;
  }
  return [];
}
console.log("Two Sum:", twoSum([2, 7, 11, 15], 9));

// ❓ Palindrome check (string)
function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++; right--;
  }
  return true;
}
console.log("Palindrome (racecar):", isPalindrome("racecar"));


// ===============================================
// 🚀 Congratulations! 
// You now know:
// - Time complexity intuition (O(1), O(n), O(n^2), O(log n))
// - Array manipulation (max, reverse)
// - Searching (linear & binary search)
// - Sorting (bubble sort, built-in sort)
// - Recursion (factorial, Fibonacci)
// - Basic DSA interview-style problems
// ===============================================