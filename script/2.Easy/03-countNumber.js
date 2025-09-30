function countNum1(n){
    let cnt = 0;

    n = Math.abs(n); // handle negatives
    if (n === 0) return 1; // special case for 0
    while (n > 0){
        n = Math.floor(n / 10);
        cnt++;
    }
    return cnt;
}

function countNum2(n) {
    n = Math.abs(n); // handle negatives
    if (n === 0) return 1; // special case for 0

    // Use logarithm base 10 to count the number of digits
    // log10(n) gives digits - 1, so add 1 and floor the result
    return Math.floor(Math.log10(n)) + 1;
}


let n = 154284;
console.log(countNum1(n)); 
console.log(countNum2(n)); 