/*
PRACTICE: Replace all 0's with 5 (Difficulty: Basic)
Q: You are given an integer n. You need to convert all zeroes of n to 5.
*/

function replaceZero1(num){
    // using the digit concept, ; divide by 10
    // if the remainder is != 0 > change it to zero
    
    let n2 = Math.abs(num);
    if(n2 === 0) return 5;
    let revN = 0;

    while(n2 !== 0){
        let checkZero = n2 % 10;
        if(checkZero === 0){
            checkZero = 5;
        }
        revN = revN * 10 + checkZero;
        n2 = Math.floor(n2/10);
    }

    return Number(revN.toString().split('').reverse().join(''));

    // TIME COMPLEXITY: O(d) AND SPACE COMPLEXITY: 0(d)
}

function replaceZero2(num){
    if(num === 0) return 5;

    let isNegative = num < 0;
    let n = Math.abs(num);
    let place = 1, result = 0;

    while(n !== 0){
        let digit = n % 10; // this will save the remainder
        if(digit === 0) digit = 5;
        result += digit * place;
        place *= 10;
        n = Math.floor(n / 10);
    }

    return isNegative ? -result : result;

    // TIME COMPLEXITY: O(d) AND SPACE COMPLEXITY: 0(1)
}


function testReplaceZero(func){
    const tests = [
        {input: 1020, expected: 1525},
        {input: 0, expected: 5},
        {input: 900, expected: 955},
        {input: 123, expected: 123},
        {input: 10005, expected: 15555},
        {input: -1020, expected: -1525},
    ];

    for(const {input, expected} of tests){
        const output = func(input);
        const pass = output === expected ? "PASS" : "FAIL";
        console.log(`${pass} | Input: ${input} | Output: ${output} | Expsected: ${expected}`);
    }
}

console.log("Function 1")
testReplaceZero(replaceZero1);
console.log("Function 2")
testReplaceZero(replaceZero2);