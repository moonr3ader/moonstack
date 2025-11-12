// ------ Easy Problems on Recursion in JS ------ 
//  Print 1 to n without loop
//  Print n to 1 without loop
//  Mean of Array using Recursion
//  Sum of natural numbers using recursion
//  Decimal to binary number using recursion
//  Sum of array elements using recursion

// PRINT GFG n TIMES
function printGfg(n){
    if(n == 0)
        return;

    printGfg(n-1);
    console.log("GFG");
}

printGfg(5);

// Print 1 to n without using loops
function printTillN(n){
    function helper(k) {
        if (k === 0) return;
        helper(k - 1);
        process.stdout.write(k + " ");
    }
    helper(n);
    console.log("");
}
printTillN(5);

// Print N to 1 without loop
function printNos(n){
    if(n === 0)
        return;
    process.stdout.write(n + " ");
    printNos(n - 1);
}
printNos(5);

// Sum of Natural Numbers
function findSum(n){
    if(n === 1)
        return 1;
    return n + findSum(n - 1);
}
let n = 6;
console.log("");
console.log(`findSum of ${n} is ${findSum(n)}`);