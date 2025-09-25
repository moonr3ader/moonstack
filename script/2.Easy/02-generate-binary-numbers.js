// Generate Binary Numbers
// Difficulty: Easy
/* Given a number n. The task is to generate all binary numbers with decimal values from 1 to n.
    Examples:
    Input: n = 4
    Output: ["1", "10", "11", "100"]
    Explanation: Binary numbers from 1 to 4 are 1, 10, 11 and 100.
    
    Input: n = 6
    Output: ["1", "10", "11", "100", "101", "110"]
    Explanation: Binary numbers from 1 to 6 are 1, 10, 11, 100, 101 and 110.
    Constraints: 1 ≤ n ≤ 106
*/

const { join } = require("@prisma/client/runtime/library");


// MY APPROACH: Using .toString(2)
function binaryGenerate(n){
    let arr = [];
    for(let i=1;i<=n;i++){
        let temp = i.toString(2);
        arr.push(temp);
    }
    return arr;
}
let n = 6;
console.log(`Bits from 1 to ${n} are: ${binaryGenerate(n)}`);
console.log(binaryGenerate(n));
// ------------------------------------  ANALYSIS  ------------------------------------
// - Uses JavaScript’s built-in toString(2) → clean and efficient.
// - Time complexity: O(n log n) (log n for binary conversion).
// - Very readable and minimal code.
// - Best for production because it’s concise and leverages the standard library.
// - Downside: doesn’t show your algorithmic thinking if this were a coding interview.


// GfG [Naive Approach] Using Bit Manipulation - O(n log(n)) Time and O(1) Space
function generateBinary(n){
    let result = [];

    for (let num=1; num<=n; num++){
        let temp = num;
        let binary = "";

        //Convert decimal number to binary
        while (temp > 0){
            let rem = temp % 2;

            if(rem === 0){
                binary += '0';
            } else {
                binary += '1';
            }

            temp = Math.floor(temp / 2);
        }

        // reverse to get correct order
        binary = binary.split('').reverse().join('');
        result.push(binary);
    }
    return result;
}

// Driver Code
n = 6;
let binaries = generateBinary(n);

console.log(binaries.join(' '));
// ------------------------------------  ANALYSIS  ------------------------------------
// - Implements manual decimal → binary conversion.
// - Still O(n log n), but less efficient than Answer 1 because of repeated string reversal.
// - More verbose, but great for learning and interview demonstration.
// - Shows you understand the binary conversion process.

// GfG [Expected Approach] Using Queue - O(n) Time and O(n) Space
class Queue {
    constructor(){
        this.size = 0;
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    //Enqueue element at the back
    enqueue(item){
        this.items[this.backIndex] = item;
        this.backIndex++;
        this.size++;
    }

    // Dequeue element from the front
    dequeue(){
        if(this.isEmpty()) return null;
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        this.size--;

        return item;
    }

    // check if queue is empty
    isEmpty(){
        return this.backIndex === this.frontIndex;
    }

    getSize(){
        return this.size;
    }
}

// Function to generate first n binary numbers
function generateBinary2(n){
    let res = [];
    let q = new Queue();

    // Enqueue the first binary number
    q.enqueue("1");

    // This loop is like BFS of a tree with 1 as root
    // 0 as left child and 1 as right child and so on
    while (n-- > 0){
        let s1 = q.dequeue();
        res.push(s1);

        let s2 = s1;

        if(q.getSize() < n){
            // Append "0" to s1 and enqueue it
            q.enqueue(s1 + "0");

            // Append "1" to s2 and enqueue it
            q.enqueue(s2 + "1");
        }
    }
    return res;
}
n = 6;
let res = generateBinary2(n);
console.log(res.join(" "));


// - Why this Works:
        // BFS ensures we generate numbers level by level, which corresponds exactly to decimal order: "1", "10", "11", "100", "101", "110", ..."
        // Each node’s left child is always smaller than its right child in binary, preserving correct ordering.
        // Since we only generate n numbers, we get all binary numbers from 1 to n in order.
        // Note: In JavaScript, there is no built-in queue data structure, so we create a custom queue class.
// ------------------------------------  ANALYSIS  ------------------------------------
// - Uses queue-based BFS idea: generates binary numbers as if building a binary tree.
// - Time complexity: also O(n log n).
// - Most complex of the three; harder to read and maintain.
// - Useful for algorithm practice, but overkill in production.
// - Good in interviews if the problem explicitly wants you to use a queue / BFS technique.