/*
LeetCode: 7. Reverse Integer | Medium

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

var reverse = function(x){
    let revN = 0;
    let n = Math.abs(x);

    while(n!==0){
        revN = (revN * 10) + (n % 10);
        n = Math.floor(n/10);
    }
    revN = revN * Math.sign(x);
    if(revN < -2147483648 || revN > 2147483647){
        return 0;
    }
    
    return revN;
}

let testcases = [120, 234, 5321, -53252];
for(let val of testcases){
    console.log(`Checking if all functions give the same output: ${reverse(val)}, ${reverse(val)}, ${reverse(val)}, ${reverse(val)}`); 
}