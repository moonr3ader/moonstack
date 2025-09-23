// === QUESTION ===
// Find First n Fibonacci Numbers: 
// Given an integer n. The task is to find the first n Fibonacci Numbers.
// Examples:
//  Input: n = 3
//  Output: 0 1 1
//  Input: n = 7
//  Output: 0 1 1 2 3 5 8

/*
1. Recursive Approach - O(n*2n) Time and O(n) Space
Find nth fibonacci number by calling for n-1 and n-2 and adding their return value. The base case will be if n=0 or n=1 then the fibonacci number will be 0 and 1 respectively.

Analogy for Recursive Approach (call it “Storytelling” Method)
function findFibonacci(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else return findFibonacci(n - 2) + findFibonacci(n - 1);
}
Analogy: Like telling a story, but to finish it, you have to hear all the smaller stories first.
- Imagine a kid asking: "What is fib(5)?"
- The teacher says: "Hmm, to know fib(5), I first need fib(3) and fib(4)."
- For fib(4), the teacher says: "Wait, I need fib(2) and fib(3)."
- For fib(3), again: "I need fib(1) and fib(2)."
- It keeps breaking down like a family tree until you hit the base cases (fib(0) or fib(1)).

Visualization: findFibonacci(5)
fib(5) = fib(4) + fib(3)
fib(4) = fib(3) + fib(2)
fib(3) = fib(2) + fib(1)
Keep breaking until fib(0) or fib(1).


That looks like a tree branching downwards 🌳
- Leaves of the tree are 0 or 1 (base cases).
- Internal nodes repeat work a lot (fib(3) is calculated multiple times).
That’s why it’s slow → O(n*2^n) time.

Building the full list
function fibonacciNumbers(n) {
    let ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(findFibonacci(i));
    }
    return ans;
}


If n = 7:
It asks for fib(0), fib(1), fib(2), … fib(6).
Each one gets computed with a huge story tree.
Output: 0 1 1 2 3 5 8


*/

/* 
2. Iterative Approach - O(n) Time and O(1) Space
To find Fibonacci numbers by maintaining two variables (f1 and f2) to represent consecutive Fibonacci numbers. Starting with 0 and 1, it iteratively computes the next Fibonacci number, appends it to the result list, and updates the variables accordingly.

Analogy for Iterative Approach (call it “Building Bricks” Method)
Think of two bricks (f1 and f2).
Brick1 = 0, Brick2 = 1.
To build the next brick, just add the last two bricks.
Then slide forward:
- drop the oldest brick,
- move the newer brick into its place,
- put the new one at the end.

Walkthrough with n = 7
Start: f1 = 0, f2 = 1 → [0]
Loop i=1: push(1), next = 0+1=1 → [0,1]
Loop i=2: push(1), next = 1+1=2 → [0,1,1]
Loop i=3: push(2), next = 1+2=3 → [0,1,1,2]
Loop i=4: push(3), next = 2+3=5 → [0,1,1,2,3]
Loop i=5: push(5), next = 3+5=8 → [0,1,1,2,3,5]
Loop i=6: push(8), next = 5+8=13 → [0,1,1,2,3,5,8]

✅ Done in linear time O(n) and constant space O(1).
*/

function findFibonacci(n) {
    //base case n = 0 , n = 1
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return findFibonacci(n - 2) + findFibonacci(n - 1);
    }
}
function recursiveFibonacci(n){
    let ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(findFibonacci(i));
    }
    return ans;
}

function iterativeFibonacci(n){
    let arr = [];
    let f1 = 0, f2=1;
    
    arr.push(f1);

    for(let i = 1;i < n;i++){
        arr.push(f2);
        let next = f1 + f2;
        f1 = f2;
        f2 = next;
    }
    return arr;
}

// Driver Code
let n = 7;
let res1 = recursiveFibonacci(n);
console.log(res1.join(' '));

n = 5;
let res2 = iterativeFibonacci(n);
console.log(res2.join(' '));