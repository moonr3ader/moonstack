// CONVERT DECIMAL TO BINARY
/*
My original code:

let arr = [];
let n = 12;

if(n > 0){
    for(let i = n; i < n; i--){
        let val = i % 2;
        arr.push(val);
        console.log(arr);
    }
}

What's wrong (quick, concrete list)
- for (let i = n; i < n; i--)
    — with i initialized to n, the condition i < n is false immediately, so the loop never runs.
- The algorithm uses i-- (decrement by 1)
    — the usual decimal→binary method needs to divide by 2 repeatedly, not subtract 1.
- You push i % 2 into arr — that part is OK, but the bits are produced least-significant first (reverse order), so you must reverse the array before producing the final binary string.
- Minor: terminology — it's the remainder (not "reminder").
- Edge cases missing: n === 0, negative numbers, non-integers.
*/

// CHANGES - NOT USING FUNCTIONS
let arr = [];
let n  = 29;

if(n > 0){
    //iterate while n > 0, each step divide n by 2
    for(let i = n; i>0;i=Math.floor(i/2)){
        let val = i % 2;
        arr.push(val);          //remainder (0 or 1)
    }

    // reverse the elements in array
    arr.reverse();
    console.log(`My Modified Code: ${arr.join('')}`);
} else if(n === 0){
    console.log("Binary: 0");
} else{
    console.log("negative numbers are not handled by this simple function.");
}


// CLEANER WAY - USING FUNCTION
function decimalToBinary(n){
    if(!Number.isInteger(n) || n < 0){
        throw new TypeError('Expected a non-negative integer.');
    }
    if (n === 0) return 0;

    const bits = [];
    while(n > 0){
        bits.push(n % 2);
        n = Math.floor (n/2);
    }
    return bits.reverse().join('');
}

// TEST CASES
console.log(`Learned from GPT: ${decimalToBinary(n)}`);

// ---------------------- GfG Solutions  ----------------------
// Approach 1: Division by 2 - O(log₂(n)) Time and O(log₂(n)) Space
/*
To convert a decimal number to binary, repeatedly divide it by 2 and record the remainders. Reading these remainders in reverse gives the binary representation.
*/

function decToBinary1(n){
    let bin = [];
    while (n >  0){
        let bit = n % 2;
        bin.push(String(bit));
        n = Math.floor(n / 2);
    }

    //reverse the string
    bin.reverse();
    return bin.join('');
}

console.log(`GfG Approach 1: ${decToBinary1(n)}`);

// Approach 2: Using Head Recursion - O(log₂(n)) Time and O(log₂(n)) Space
/*
The idea is same as the previous approach, but we will use recursion to generate the binary equivalent number.
*/
function decToBinaryRec(n, bin){
    //Base case
    if(n === 0){
        return;
    }

    // Recur for smaller bits
    decToBinaryRec(Math.floor(n/2), bin);

    //Add MSB of current number to the binary string
    bin.push(n % 2);
}

function decToBinary2(n){
    if (n === 0){
        return "0";
    }

    let bin = [];
    decToBinaryRec(n, bin);
    return bin.join('');
}

console.log(`GfG Approach 2: ${decToBinary2(n)}`);

// Approach 3: Using Bitwise Operators - O(log₂(n)) Time and O(log₂(n)) Space
/*
Using bitwise operators, we can extract binary digits by checking the least significant bit (n & 1) and then right-shifting the number (n >> 1) to process the next bit.
This method is faster than arithmetic division and modulo, as bitwise operations are more efficient at the hardware level.
*/
function decToBinary3(n){
    //String to store the binary representation
    let bin = "";

    while (n > 0){
        // Finding (n % 2) using bitwise AND operator
        // (n & 1) gives the least significant bit (LSB)
        let bit = n & 1;
        bin += bit;

        // Right shift n by 1 (equivalent to n = Math.floor (n / 2))
        // This removes the least significant bit (LSB)
        n = n >> 1;
    }
    return bin.split("").reverse().join("");
}

console.log(`GfG Approach 3: ${decToBinary3(n)}`);

// Approach 4: Using Built-in Methods - O(log₂(n)) Time and O(log₂(n)) Space
/*
The toString() method of Function instances returns a string representing the source code of this function.
*/
function decToBinary4(n){
    return n.toString(2);
}

console.log(`GfG Approach 4: ${decToBinary4(n)}`);