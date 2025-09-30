function reverseNum1(n){
    let revN = 0;
    while(n > 0){
        revN = revN * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return revN;
}


// USING RECURSION
function reverseNum2(n){
    // code here
}

let n = 7899;
console.log(reverseNum1(n));